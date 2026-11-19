import { useCallback, useEffect, useRef, useState } from 'react'
import { slides } from './slides.jsx'

const LAST = slides.length - 1

function initialIndex() {
  const n = parseInt(window.location.hash.replace('#', ''), 10)
  return Number.isFinite(n) ? Math.min(Math.max(n - 1, 0), LAST) : 0
}

export default function App() {
  const [index, setIndex] = useState(initialIndex)
  const [dir, setDir] = useState(1)
  const [overview, setOverview] = useState(false)
  const touchX = useRef(null)
  const indexRef = useRef(index)

  const go = useCallback((n) => {
    const cur = indexRef.current
    const target = Math.min(Math.max(n, 0), LAST)
    if (target === cur) return
    indexRef.current = target
    setDir(target > cur ? 1 : -1)
    setIndex(target)
  }, [])
  const next = useCallback(() => go(indexRef.current + 1), [go])
  const prev = useCallback(() => go(indexRef.current - 1), [go])

  // URLハッシュと同期(#3 のように直リンクできる)
  useEffect(() => {
    window.history.replaceState(null, '', `#${index + 1}`)
  }, [index])

  // 戻る/進むやハッシュ直編集にも追随
  useEffect(() => {
    const onHash = () => {
      const n = parseInt(window.location.hash.replace('#', ''), 10)
      if (Number.isFinite(n)) go(n - 1)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [go])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' || e.key.toLowerCase() === 'o') {
        setOverview((v) => !v)
        return
      }
      if (overview) return
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) {
        e.preventDefault()
        next()
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) {
        e.preventDefault()
        prev()
      } else if (e.key === 'Home') go(0)
      else if (e.key === 'End') go(LAST)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, overview])

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 60) (dx < 0 ? next : prev)()
    touchX.current = null
  }

  const slide = slides[index]

  return (
    <div
      className="deck-bg relative h-full w-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* progress bar */}
      <div className="absolute inset-x-0 top-0 z-20 h-1 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-muse-deep via-muse to-grok transition-all duration-500"
          style={{ width: `${((index + 1) / slides.length) * 100}%` }}
        />
      </div>

      {overview ? (
        <div className="relative z-10 h-full overflow-y-auto p-8 md:p-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-2xl font-bold text-slate-100">スライド一覧</h2>
              <button
                onClick={() => setOverview(false)}
                className="rounded-lg border border-line bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10"
              >
                閉じる (Esc)
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => {
                    go(i)
                    setOverview(false)
                  }}
                  className={`rounded-xl border p-5 text-left transition hover:border-muse/60 hover:bg-white/10 ${
                    i === index ? 'border-muse/60 bg-white/10' : 'border-line bg-panel/80'
                  }`}
                >
                  <p className="text-xs font-semibold text-slate-500">
                    {String(i + 1).padStart(2, '0')} — {s.section}
                  </p>
                  <p className="mt-2 font-semibold text-slate-100">{s.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <main key={index} className="relative z-10 h-full overflow-y-auto">
          <div
            className={`mx-auto flex min-h-full w-full max-w-5xl items-center px-4 pb-28 pt-10 md:px-10 ${
              dir > 0 ? 'anim-fwd' : 'anim-bck'
            }`}
          >
            <div className="w-full">{slide.content}</div>
          </div>
        </main>
      )}

      {/* bottom chrome */}
      <footer className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-center px-5 py-4 text-xs text-slate-500 sm:justify-between">
        <span className="hidden w-40 truncate text-left sm:block">{slide.section}</span>
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="前へ"
            className="rounded-md border border-line bg-white/5 px-3 py-1.5 text-slate-300 transition enabled:hover:bg-white/10 disabled:opacity-30"
          >
            ←
          </button>
          <span className="font-mono tabular-nums">
            {String(index + 1).padStart(2, '0')} / {slides.length}
          </span>
          <button
            onClick={next}
            disabled={index === LAST}
            aria-label="次へ"
            className="rounded-md border border-line bg-white/5 px-3 py-1.5 text-slate-300 transition enabled:hover:bg-white/10 disabled:opacity-30"
          >
            →
          </button>
          <button
            onClick={() => setOverview((v) => !v)}
            aria-label="一覧"
            className="ml-1 rounded-md border border-line bg-white/5 px-3 py-1.5 text-slate-300 transition hover:bg-white/10"
          >
            ⊞
          </button>
        </div>
        <span className="hidden w-40 text-right sm:block">Muse × Grok Bot</span>
      </footer>
    </div>
  )
}
