/* スライドのコンテンツ定義。
   文言を直したいときはこのファイルだけ編集すればOK。 */

const ACCENTS = {
  muse: {
    text: 'text-muse',
    border: 'border-muse/40',
    grad: 'from-muse-deep to-muse',
    softBg: 'bg-muse/10',
    ring: 'ring-muse/30',
  },
  grok: {
    text: 'text-grok',
    border: 'border-grok/40',
    grad: 'from-grok-deep to-grok',
    softBg: 'bg-grok/10',
    ring: 'ring-grok/30',
  },
}

function Kicker({ accent, no, children }) {
  return (
    <p className={`kicker ${ACCENTS[accent]?.text ?? 'text-slate-400'}`}>
      <span className="mr-3 text-slate-500">{no}</span>
      {children}
    </p>
  )
}

function SlideHead({ accent, no, kicker, title, sub }) {
  return (
    <header className="stagger">
      <Kicker accent={accent} no={no}>{kicker}</Kicker>
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg text-slate-400">{sub}</p>}
    </header>
  )
}

function Card({ accent, title, icon, children }) {
  const a = ACCENTS[accent] ?? {}
  return (
    <div
      className={`rounded-2xl border border-line bg-panel/80 p-6 text-left shadow-xl shadow-black/30 ${
        accent ? `border-t-2 ${a.border}` : ''
      }`}
    >
      {icon && <div className="mb-3 text-2xl">{icon}</div>}
      <h3 className={`text-lg font-semibold text-slate-100 ${a.text ?? ''}`}>{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-slate-400">{children}</div>
    </div>
  )
}

function Chip({ accent, children }) {
  const a = ACCENTS[accent] ?? {}
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line px-4 py-1.5 text-sm text-slate-300 ${
        a.softBg ?? 'bg-white/5'
      }`}
    >
      {children}
    </span>
  )
}

function Stat({ accent, value, label }) {
  const a = ACCENTS[accent] ?? {}
  return (
    <div className="rounded-2xl border border-line bg-panel/80 p-5 text-center">
      <p className={`text-3xl font-black md:text-4xl ${a.text ?? 'text-slate-100'}`}>{value}</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-500 md:text-sm">{label}</p>
    </div>
  )
}

const MUSE_TASKS = [
  'メールを整理', '予約を取る', '買い物をする', '節約する',
  'カレンダー管理', 'フィットネス計画',
]

export const slides = [
  {
    id: 'title',
    section: 'はじめに',
    title: 'Muse × Grok Bot 活用ガイド',
    content: (
      <div className="stagger flex flex-col items-center text-center">
        <p className="kicker text-slate-500">AI Agent Playbook</p>
        <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-slate-50 md:text-7xl">
          <span className="bg-gradient-to-r from-muse-deep via-muse to-muse bg-clip-text text-transparent">
            Muse
          </span>
          <span className="mx-4 text-slate-600">×</span>
          <span className="bg-gradient-to-r from-grok-deep via-grok to-grok bg-clip-text text-transparent">
            Grok Bot
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-slate-300">
          使い方の基本から、自分の実運用の中身まで全部見せ。
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Chip accent="muse">Meta製 パーソナルAIエージェント</Chip>
          <Chip accent="grok">xAI製 AIチームメイト</Chip>
        </div>
        <p className="mt-10 text-sm text-slate-400">
          LT勉強会 2026.11.19
          <span className="mx-3 text-slate-700">/</span>
          <a href="https://x.com/morimoli_777" target="_blank" rel="noreferrer"
             className="text-slate-300 underline underline-offset-4">
            X: @morimoli_777
          </a>
        </p>
        <p className="mt-10 text-sm text-slate-500">
          <kbd className="rounded border border-line bg-white/5 px-2 py-0.5">←</kbd>{' '}
          <kbd className="rounded border border-line bg-white/5 px-2 py-0.5">→</kbd> で移動
          <span className="mx-2 text-slate-700">/</span>
          <kbd className="rounded border border-line bg-white/5 px-2 py-0.5">O</kbd> で一覧
        </p>
      </div>
    ),
  },
  {
    id: 'agents',
    section: 'はじめに',
    title: 'まず結論',
    content: (
      <div className="stagger">
        <SlideHead
          accent="muse" no="01"
          kicker="Overview"
          title="「答える」AIから「やってくれる」AIへ"
          sub="どちらもチャットの枠を超えて、自分専用のコンピュータで実際のタスクをやり遂げるエージェント"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card accent="muse" title="Muse — あなた専用の執事">
            <p>
              Meta製のパーソナルエージェント。<b className="text-slate-200">サイドチャットを何本も立ち上げて
              並列で仕事を進められる</b>ので、実質「1人」ではなく量産も可能。
            </p>
            <p className="mt-3 text-xs text-slate-500">muse.ai / iOS・Android・Web・Mac / WhatsApp・音声</p>
          </Card>
          <Card accent="grok" title="Grok Bot — 分身を量産できる同僚">
            <p>
              xAI製。<b className="text-slate-200">役割ごとにBotを何体も作り</b>、
              ルーティンやwebhookで動き続ける仕組みを組める。
            </p>
            <p className="mt-3 text-xs text-slate-500">x.ai/bot / デスクトップ・モバイル / Slack・Teams・X</p>
          </Card>
        </div>
        <div className="mt-8 rounded-2xl border border-line bg-panel/80 p-5 text-center text-sm text-slate-400">
          ざっくり言うと: <b className="text-muse">Muse = サイドチャットで分身もできる優秀な秘書</b> ／{' '}
          <b className="text-grok">Grok Bot = 雇って増やせる専門スタッフ軍団</b>
        </div>
      </div>
    ),
  },
  {
    id: 'dna',
    section: 'はじめに',
    title: '親会社の強み',
    content: (
      <div className="stagger">
        <SlideHead
          accent="muse" no="02"
          kicker="DNA"
          title="親会社の資産が、そのまま武器になる"
          sub="「MuseはMeta系、Grok BotはX系」— 方向性は正しいが、実はもう一段ある"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card accent="muse" title="Muse = Meta直系">
            <ul className="space-y-2">
              <li>・<b className="text-slate-200">WhatsApp+音声モード</b>でも直接話せる(公式)</li>
              <li>・<b className="text-slate-200">Instagram / Facebook</b>コネクタでメタ系アプリと連携</li>
              <li>・決済はLink(Stripe製)のワンタイムカード — カード番号を見せない</li>
              <li>・公開バグバウンティ<b className="text-slate-200">最大$300K</b>(PI攻撃だけで最大$130K)</li>
            </ul>
          </Card>
          <Card accent="grok" title="Grok Bot = xAI × Cursor">
            <ul className="space-y-2">
              <li>・開発元はxAI(SpaceX Super Intelligence LLC) — <b className="text-slate-200">Xの投稿監視・収集が得意</b></li>
              <li>・実行基盤は<b className="text-slate-200">Cursor製</b>(DL元がapi2.cursor.sh、MCP+skillsプラグイン)</li>
              <li>・だからGitHub・webhook・git操作など<b className="text-slate-200">開発者ワークフローにも強い</b></li>
              <li>・自分もXの金融アカウント監視で実際に使っている</li>
            </ul>
          </Card>
        </div>
        <div className="mt-8 rounded-2xl border border-line bg-panel/80 p-5 text-left text-sm text-slate-400">
          <b className="text-slate-200">正確には:</b> 「X系だからXが強い」だけでなく、
          CursorのエンジニアリングDNAが入っているのがGrok Botの本質。
          エージェント選びは「どの会社の資産に近い仕事か」で考えると外れない。
        </div>
      </div>
    ),
  },
  {
    id: 'muse-about',
    section: 'Muse',
    title: 'Museとは',
    content: (
      <div className="stagger">
        <SlideHead
          accent="muse" no="03"
          kicker="Muse Basics"
          title="Muse = ゴールを伝えるだけのAI"
          sub="システムプロンプトの1行目は「Your purpose is to make your user's life better」。中核は専用モデル「Muse Spark」"
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {MUSE_TASKS.map((t) => (
            <Chip key={t} accent="muse">{t}</Chip>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-panel/80 p-6 text-left">
            <p className="font-semibold text-slate-100">1本の長い会話 + サイドチャット</p>
            <p className="mt-2 text-sm text-slate-400">
              ターン制ではない。返答を待たずに次々タスクを投げられる。
              サイドチャットは<b className="text-slate-200">何本でも立てられる</b>ので、
              テーマ別に並列で量産できる。
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-panel/80 p-6 text-left">
            <p className="font-semibold text-slate-100">自分だけのMuseに育てる</p>
            <p className="mt-2 text-sm text-slate-400">
              アバター・名前・性格をカスタマイズ(設計者のMuseは「Veda」)。
              会話から学習して先回りし、頼む前に「次やるべきこと」を提案してくれる。
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'muse-inside',
    section: 'Muse',
    title: 'Museの中身',
    content: (
      <div className="stagger">
        <SlideHead
          accent="muse" no="04"
          kicker="Deep Dive"
          title="Museの中身を深掘り"
          sub="公式デザインブログから読み解く、4つの仕組み"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card accent="muse" title="専用Secure VM" icon="🖥️">
            1人1台の永続・隔離Linuxマシン。ブラウザは<b className="text-slate-200">本物のChromium</b>で
            自分がいつでも覗いて手を出せる。コードを書いてコンパイルし、道具やコネクタまで自作。
            認証情報はVM内の隔離領域に保管(Metaの中央基盤ではない)。
          </Card>
          <Card accent="muse" title="Artifacts" icon="📄">
            テキストで返すより「モノ」を作る。家計トラッカー、学習ガイド、
            睡眠ダッシュボード——チャットに届き、そのまま使える。
            <p className="mt-2 text-xs text-slate-500">出典: muse.ai/blog/how-we-designed-muse</p>
          </Card>
          <Card accent="muse" title="Goals & Memory" icon="🎯">
            Goalsタブで長期目標と計画を追跡。記憶ファイルは自分で閲覧・編集・
            ダウンロードできる透明設計。
          </Card>
          <Card accent="muse" title="バックグラウンド実行" icon="🌙">
            アプリを閉じてもcronと<b className="text-slate-200">サブエージェントの群れ</b>が働き続ける。
            スケジュールとイベント駆動で進め、意味のある変化がある時だけ通知してくる。
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 'muse-security',
    section: 'Muse',
    title: 'Museの安全設計',
    content: (
      <div className="stagger">
        <SlideHead
          accent="muse" no="05"
          kicker="Muse Safety"
          title="任せても大丈夫な仕組み"
          sub="公式セキュリティブログ(Tarek Sheasha, 2026/9/8)の実装詳細 — 「エージェントは攻撃されている前提」で設計"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card accent="muse" title="Sentinel — 唯一の許可権限" icon="🛡️">
            Museは操作を「提案」するだけ。<b className="text-slate-200">コネクタ操作と全ネットワーク通信(L4/L7)の許可は
            ホスト側の別エージェントSentinelが独占</b>。許可はone-time/セッション/タスク/期間限定の
            厳格なcapabilityとして発行される。
          </Card>
          <Card accent="muse" title="モデルは秘密を見ない" icon="🔐">
            エージェントが見るのはダミーの<b className="text-slate-200">surrogateトークンのみ</b>。
            通信確定後、Sentinelがネットワーク境界で本物に差し替えるので
            プロンプトインジェクションで奪えない。メールのOTP・リセットリンクもフィルタ済み。
          </Card>
          <Card accent="muse" title="tainted egress(eBPF)" icon="🧪">
            カーネルレベルでデータフローを追跡。<b className="text-slate-200">ユーザーデータを読んだプロセスは
            「汚染」扱いで自動許可を失い</b>、外部送信は必ず承認フローへ。
            クリーンな処理だけが静かに通れる。
          </Card>
          <Card accent="muse" title="Link決済保護" icon="💳">
            使い捨てカード番号は<b className="text-slate-200">加盟店・金額・期限に紐付け</b>て発行。
            チェックアウト検知で毎回承認。Shop Payも対応予定。
            <p className="mt-2 text-xs text-slate-500">出典: Stripe公式 / Metaヘルプセンター</p>
          </Card>
        </div>
        <div className="mt-6 rounded-2xl border border-line bg-panel/80 p-5 text-left text-sm text-slate-400">
          <b className="text-slate-200">さらに:</b> 隔離はsystemd-nspawn、PI検知はモデル学習+アンサンブル分類器の多層防御、
          ブラウザはDOMではなくアクセシビリティツリー経由でJS実行不可。
          「<b className="text-slate-200">Confidential VM</b>」(Meta社も見られない暗号化モード)を2026年内提供予定と公表(ブログ時点)。
        </div>
      </div>
    ),
  },
  {
    id: 'muse-flow',
    section: 'Muse',
    title: 'Museの使い方',
    content: (
      <div className="stagger">
        <SlideHead
          accent="muse" no="06"
          kicker="Muse Flow"
          title="使い方はシンプル、4ステップ"
        />
        <ol className="mt-10 space-y-4">
          {[
            ['ゴールを伝える', '「来月の出張の手配をして」など目的ベースでOK。まとめて複数投げてもいい'],
            ['Museが計画・実行', 'Secure VM上で専用ブラウザサブエージェントが操作。アプリを閉じても裏で動く'],
            ['重要操作は承認', 'Sentinel+承認カードの2重チェック。送信・購入前に確実に止められる'],
            ['進捗は通知&ログで把握', '意味のある変化がある時だけ通知。アバターをタップすれば全活動ログが見える'],
          ].map(([t, d], i) => (
            <li key={t} className="flex items-start gap-5 rounded-2xl border border-line bg-panel/80 p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muse/15 font-bold text-muse">
                {i + 1}
              </span>
              <div className="text-left">
                <p className="font-semibold text-slate-100">{t}</p>
                <p className="mt-1 text-sm text-slate-400">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    ),
  },
  {
    id: 'grok-about',
    section: 'Grok Bot',
    title: 'Grok Botとは',
    content: (
      <div className="stagger">
        <SlideHead
          accent="grok" no="07"
          kicker="Grok Bot Basics"
          title="Grok Bot = 仕事を任せられるAIチームメイト"
          sub="「AI teammates you can give real work to」— 1.0(2026/11リリース)で3方向に強化"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Card accent="grok" title="Multiplayer" icon="👥">
            Botをチームで共有。Slack/Teams常駐、Meet/Zoom/Teamsの会議にも
            <b className="text-slate-200">「〜transcribing」名で参加して議事録+アクション項目</b>を返す
            (会議機能はTeam/Enterprise/Ultraプラン、ホストの承認制)。
            <p className="mt-2 text-xs text-slate-500">出典: docs.x.ai/grok-bot/meetings</p>
          </Card>
          <Card accent="grok" title="Proactive" icon="⚡">
            頼まれる前に動く。放置タスクのフォロー、次に必要なことの提案、
            判断が要る場面で人を呼ぶ。
          </Card>
          <Card accent="grok" title="More capable" icon="🚀">
            ブラウザ操作が高速・安定化。ドキュメント/スライド作成、
            共同編集できるインタラクティブなPagesを生成。
          </Card>
        </div>
        <div className="mt-8 rounded-2xl border border-line bg-panel/80 p-5 text-left text-sm text-slate-400">
          <b className="text-slate-200">裏側:</b> クライアント内部の挙動から、認証はCursor SSO/プライバシーモードと共通と見られる。
          共有スペースでは各人の権限を尊重し、公開チャンネルに出して良い情報か確認する
          (公式例: 代理店向け資料から機密財務スライドを除外して提案)。
        </div>
      </div>
    ),
  },
  {
    id: 'grok-features',
    section: 'Grok Bot',
    title: 'Grok Botの特徴',
    content: (
      <div className="stagger">
        <SlideHead
          accent="grok" no="08"
          kicker="Grok Bot Features"
          title="Grok Botの6つの特徴"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Card accent="grok" title="Slack/Teamsのチームメイト" icon="💬">
            質問・仕事の依頼・スレッドへの呼び込み。TeamsではSlackと同じ挙動で、
            各メンバーの権限と利用枠で動く。
          </Card>
          <Card accent="grok" title="自分のコンピュータ" icon="🖥️">
            Bot専用のクラウドPC(転送・保存とも暗号化)。一度サインインすれば
            操作しづらい社内ツールも自分で使いこなす。
          </Card>
          <Card accent="grok" title="Routines(ルーティン)" icon="⏰">
            「毎朝7時にダッシュボード更新」のような定期実行。スケジュール駆動に加え
            webhookトリガーで外部からも起動できる。
          </Card>
          <Card accent="grok" title="Pages(ページ)" icon="📊">
            ダッシュボードなどの常駐コンテンツを生成。Botが更新し続け、自分でも編集できる。
          </Card>
          <Card accent="grok" title="Bot同士で連携" icon="🔗">
            複数Botが並行稼働し、必要に応じて他のBotへ引き継ぐ。24/7止まらない。
          </Card>
          <Card accent="grok" title="見せれば覚える" icon="🧠">
            「Show your Bot a workflow once.」手順を一度実演すれば記憶して再現。
            文脈から学び、自分の改善提案まで行う。
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 'grok-market',
    section: 'Grok Bot',
    title: 'Botマーケットプレイス',
    content: (
      <div className="stagger">
        <SlideHead
          accent="grok" no="09"
          kicker="Marketplace"
          title="Botは「作る」だけでなく「インストール」もできる"
          sub="x.ai/bot/marketplace — 公式+コミュニティ製のBotをワンクリック追加"
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {['Engineering', 'Sales', 'Marketing', 'Design', 'Personal', 'Recruiting', 'Product', 'Operations'].map((t) => (
            <Chip key={t} accent="grok">{t}</Chip>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Card accent="grok" title="即戦力Botが並ぶ" icon="🏪">
            公式例: Sales Outbound(深夜にパイプライン生成)、Talent Scout、
            Bug Reproduction、Account Health、Chief of Staffなど職種別に公開。
          </Card>
          <Card accent="grok" title="X連携Botの存在が証拠" icon="𝕏">
            「X写真をGrok Bot風アイコンにするPfp Bot」など、
            XネイティブのBotが普通に並んでいる。xAI直系の強み。
          </Card>
          <Card accent="grok" title="自分のBotも公開可能" icon="📤">
            APIをCursor/Agentプラグイン(MCP+skills)にするBotまである。
            作った仕組みをエコシステムに還元できる。
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 'compare',
    section: '比較',
    title: 'Muse vs Grok Bot',
    content: (
      <div className="stagger">
        <SlideHead
          accent="muse" no="10"
          kicker="Comparison"
          title="似ているようで得意領域が違う"
        />
        <div className="mt-8 overflow-hidden rounded-2xl border border-line">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-panel">
                <th className="px-5 py-4 font-semibold text-slate-400"></th>
                <th className="px-5 py-4 font-semibold text-muse">Muse</th>
                <th className="px-5 py-4 font-semibold text-grok">Grok Bot</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {[
                ['開発元', 'Meta', 'xAI(基盤はCursor)'],
                ['中核モデル', 'Muse Spark(PI耐性SOTA級と自称)', 'Grok'],
                ['単位', 'メインMuse+サイドチャットで並列化', '役割ごとのBot 複数体'],
                ['エコシステムの強み', 'WhatsApp・音声 / Instagram・Facebook / Link決済', 'X / Slack・Teams・会議 / GitHub系'],
                ['主な接点', 'iOS・Android・Web・Mac / WhatsApp / 音声', 'デスクトップ・モバイル / Slack・Teams・X / 会議'],
                ['実行環境', '専用Secure VM(隔離Linux+本物のChromium)', 'Bot専用クラウドPC(暗号化)'],
                ['自動化', 'スケジュール+イベント駆動、Spaceアプリの定期更新', 'ルーティン・webhook・常駐Pages'],
                ['安全の仕組み', 'Sentinel+認証情報の代替化+使い捨てカード', 'Auto Review / 権限継承 / Enterprise DLP'],
                ['料金', '価格未公表(アカウント制)', 'Premium $30 / Super $100 / Ultra $200+従量'],
              ].map(([k, m, g]) => (
                <tr key={k} className="bg-panel/50">
                  <td className="px-5 py-3 font-medium text-slate-400">{k}</td>
                  <td className="px-5 py-3 text-slate-200">{m}</td>
                  <td className="px-5 py-3 text-slate-200">{g}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 'my-grok-stats',
    section: '自分の使い方',
    title: '自分のGrok Bot運用実態',
    content: (
      <div className="stagger">
        <SlideHead
          accent="grok" no="11"
          kicker="My Grok Bot — Measured"
          title="自分のGrok Bot、観測してみた"
          sub="ローカルの使用データを分析した結果(2026/10/10〜11/18)"
        />
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          <Stat accent="grok" value="16" label="運用中のBot数" />
          <Stat accent="grok" value="500+" label="Botとの総やり取り" />
          <Stat accent="grok" value="34" label="ルーティン自動実行" />
          <Stat accent="grok" value="1" label="稼働中のwebhook連携" />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ['分析・解説Bot群', '9体', '経済×4時間軸 / 政治×2 / AI / 地政学 / 経済学'],
            ['市場監視Bot群', '2体', 'トレード参謀 / 相場ダッシュボード'],
            ['実用・連携Bot群', '5体', 'webhook / メール設定 / ハッカソン・イベント / 通知等'],
          ].map(([t, n, d]) => (
            <div key={t} className="rounded-2xl border border-line bg-panel/80 p-5 text-left">
              <p className="flex items-baseline justify-between">
                <span className="font-semibold text-slate-100">{t}</span>
                <span className="text-2xl font-bold text-grok">{n}</span>
              </p>
              <p className="mt-2 text-xs text-slate-500">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500">
          ※各Botには「日本語話者(Asia/Tokyo)、常に日本語で簡潔に」と共通ルールを持たせている
        </p>
      </div>
    ),
  },
  {
    id: 'my-grok-news',
    section: '自分の使い方',
    title: 'ニュース分析軍団',
    content: (
      <div className="stagger">
        <SlideHead
          accent="grok" no="12"
          kicker="My Usage #1"
          title="ニュースを「視点」で切り分ける分析軍団"
          sub="同じニュースを複数の時間軸・領域で解説させる。自分は読んで問いを深めるだけ"
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {['経済・短期', '経済・中期', '経済・長期', '経済・過去5年時系列', 'マクロ・ミクロ経済学',
            '政治分析', '国際政治分析', 'AI周りの重要ニュース', 'X通知'].map((t) => (
            <Chip key={t} accent="grok">{t}</Chip>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card accent="grok" title="お決まりの流れ">
            <ol className="list-decimal space-y-1.5 pl-5">
              <li>気になるニュースをBotに投げる</li>
              <li>「ざっくり言うと」→「生活への影響」→「専門家の見方」の3段解説が返る</li>
              <li><b className="text-slate-200">「もっと深掘りして」</b>で掘り下げる(最多パターン)</li>
              <li>気に入った分析は<b className="text-slate-200">「ダッシュボード化して」</b>でPage化</li>
            </ol>
          </Card>
          <Card accent="grok" title="こだわりの指示">
            <ul className="space-y-2">
              <li>・経済ニュースは<b className="text-slate-200">クルーグマン vs マンキュー</b>の対比で解説させる</li>
              <li>・「数値は実際に取れたものだけ、出典と日本時間の時点を明記」</li>
              <li>・通知は「役に立つときだけ」でノイズを増やさない</li>
            </ul>
          </Card>
        </div>
        <div className="mt-6 rounded-2xl border border-line bg-panel/80 p-5 text-left text-sm">
          <p className="text-slate-400">
            <span className="text-grok">副産物:</span>
            「AI周りの重要ニュース」Botには毎朝7時自動更新+手動更新ボタン付きの
            ダッシュボードPageを作らせて運用中。年表Botには2021年〜現在の経済年表Canvasを作らせた。
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'my-grok-trade',
    section: '自分の使い方',
    title: 'トレード参謀',
    content: (
      <div className="stagger">
        <SlideHead
          accent="grok" no="13"
          kicker="My Usage #2"
          title="最も作り込んだBot「トレード参謀」"
          sub="Botと一緒に設計して作った、ルーティン+Pagesの複合監視システム"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card accent="grok" title="常駐ルーティン(自動実行)" icon="⏰">
            <ul className="space-y-2">
              <li>・<b className="text-slate-200">寄り前チェック</b>: 平日8:15〜。夜間の米株・ドル円・金利・日経先物+監視アカウントの投稿から注目水準を3行で届ける</li>
              <li>・<b className="text-slate-200">急変アラート</b>: 取引時間中1時間毎。急騰急落・日銀・介入系を検知した時だけ通知</li>
              <li>・<b className="text-slate-200">週間カレンダー</b>: 日曜夜。翌週の指標・会合・決算と事前の見方</li>
            </ul>
          </Card>
          <Card accent="grok" title="自動更新されるPages" icon="📊">
            <ul className="space-y-2">
              <li>・<b className="text-slate-200">相場ダッシュボード</b>: Xの強気/弱気センチメント推移、言及の多い支持線・抵抗線一覧(出典付き)、主要指標</li>
              <li>・<b className="text-slate-200">トレード日記</b>: 売買記録ではなく、その日の相場観察・センチメントを蓄積して振り返るページ</li>
            </ul>
          </Card>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-panel/80 p-5 text-left text-sm">
            <p className="font-semibold text-slate-100">監視対象</p>
            <p className="mt-2 text-slate-400">
              Xの金融系アカウント3つ+
              日経先物・ドル円・米3指数・VIX・米10年金利 — <b className="text-slate-200">Xアクセスの強さをフル活用</b>
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-panel/80 p-5 text-left text-sm">
            <p className="font-semibold text-slate-100">運用ルール</p>
            <p className="mt-2 text-slate-400">
              「止めて」「再開して」でルーティンを即停止/再開。
              投資助言ではない旨をページに明記する約束。
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'my-grok-dev',
    section: '自分の使い方',
    title: 'Botを開発基盤にする',
    content: (
      <div className="stagger">
        <SlideHead
          accent="grok" no="14"
          kicker="My Usage #3"
          title="チャットを超えて: Botを「開発基盤」にする"
          sub="Cursor基盤だからこそできる、開発者向けの使い方"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Card accent="grok" title="自作アプリのAIバックエンド" icon="🔌">
            開発中のNext.jsアプリ「DOWNTIME」からwebhookルーチン経由でBotを呼び出し、
            画像解析→診断JSON+画像生成→callback返却まで任せている。
          </Card>
          <Card accent="grok" title="Bot内でアプリを作らせる" icon="📱">
            「Xの特定ワードが投稿されたら通知されるアプリ」を
            Grok Bot内に作らせて運用。外部に作らずBot上で完結。
          </Card>
          <Card accent="grok" title="雑務も丸投げ" icon="🛠️">
            「db更新、commit/pushしておいて」と開発の後片付けを依頼。
            Bot専用メールアドレスの発行も任せている。
          </Card>
        </div>
        <div className="mt-8 rounded-2xl border border-grok/40 bg-grok/5 p-5 text-left">
          <p className="text-sm leading-relaxed text-slate-300">
            <b className="text-grok">ポイント:</b>
            webhookルーチンを使うと、Grok Botが「ログイン済みで道具を持った自分専用のAIエンドポイント」になる。
            Cursor由来の拡張性がここに効いている。
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'my-muse-apps',
    section: '自分の使い方',
    title: 'Museで量産したSpaceアプリ',
    content: (
      <div className="stagger">
        <SlideHead
          accent="muse" no="15"
          kicker="My Muse Usage #1"
          title="Museの「Space」にアプリを量産している"
          sub="サイドチャットを複数立ち上げて並行制作。ライブラリに11個のスペース — 作るだけでなく定期更新・改修まで任せている(実データ)"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ['ダッシュボード系', ['補助金・助成金ダッシュボード', '旅行セール系ダッシュボード', 'コーディングエージェント利用枠ダッシュボード']],
            ['分析ツール系', ['GA・GSC 統合分析アプリ', 'Webサイト診断アプリ']],
            ['業務書類・台帳系', ['投稿台帳アプリ', '補助金・助成金リスト', '助成金 申請手順書', 'チェックリスト×3(GitHub/Gmail/Yahooメール)']],
          ].map(([t, items]) => (
            <div key={t} className="rounded-2xl border border-muse/40 bg-muse/5 p-5 text-left">
              <p className="font-semibold text-muse">{t}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                {items.map((i) => <li key={i}>・{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-panel/80 p-5 text-left text-sm">
            <p className="font-semibold text-slate-100">作ったアプリを定期実行</p>
            <p className="mt-2 text-slate-400">
              「旅行セール系」と「補助金・助成金」のダッシュボードは<b className="text-slate-200">毎朝自動更新</b>、
              リスト系は<b className="text-slate-200">週次更新</b>でスケジュール済み。
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-panel/80 p-5 text-left text-sm">
            <p className="font-semibold text-slate-100">改修もアプリ内で依頼</p>
            <p className="mt-2 text-slate-400">
              PDF出力実装、複数サイト登録・比較機能追加、バグチェック、
              HTTPS/リダイレクト監査まで<b className="text-slate-200">Museにそのまま改修させている</b>。
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'my-muse-secretary',
    section: '自分の使い方',
    title: 'Museの秘書的な使い方',
    content: (
      <div className="stagger">
        <SlideHead
          accent="muse" no="16"
          kicker="My Muse Usage #2"
          title="メールを読み、先回りして知らせてくる"
          sub="チャット履歴から見えた、プロアクティブ秘書としての実態"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card accent="muse" title="イベント・会食・待ち合わせ" icon="📅">
            <ul className="space-y-1.5">
              <li>・講座の当日リマインド+事前登録の未読チェック</li>
              <li>・<b className="text-slate-200">会食・待ち合わせ</b>も場所・時間・相手を整理して通知</li>
              <li>・入館に必要なゲストID/QRの有無を前日に確認</li>
              <li>・予定が重なったら<b className="text-slate-200">「どちらを優先しますか?」と聞きに来る</b></li>
            </ul>
          </Card>
          <Card accent="muse" title="障害・期限の監視" icon="🚨">
            <ul className="space-y-1.5">
              <li>・クラウドDBの「プロジェクト凍結予告」通知を拾って期限を逆算して警告</li>
              <li>・ウェビナー登録状況の確認</li>
              <li>・操作はせず<b className="text-slate-200">判断材料だけ届ける</b>のが正確</li>
            </ul>
          </Card>
        </div>
        <div className="mt-8 rounded-2xl border border-line bg-panel/80 p-5 text-left text-sm">
          <p className="text-slate-400">
            <span className="text-muse">連携状況:</span>
            Gmail(スレッド取得) / GitHub(専用アプリでリポジトリ選択済み) / iPhoneペアリング。
            驚きだったのは、Museが自分の手を超えない線引きも正直に言う点
            (「Macは未接続なのでフォルダは触れません」と明言していた)。
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'tips',
    section: '自分の使い方',
    title: '使い分けのコツ',
    content: (
      <div className="stagger">
        <SlideHead
          accent="muse" no="17"
          kicker="Tips"
          title="使い分けと、上手な任せ方"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-muse/40 bg-muse/5 p-6 text-left">
            <p className="font-semibold text-muse">Spaceアプリ・先回り秘書 → Muse</p>
            <p className="mt-2 text-sm text-slate-400">
              ダッシュボード・診断・手順書をSpaceアプリとして残し、定期更新。
              メール監視でイベントリマインドや期限警告まで届けてくれる個人領域。
            </p>
          </div>
          <div className="rounded-2xl border border-grok/40 bg-grok/5 p-6 text-left">
            <p className="font-semibold text-grok">常駐・監視・仕組み化 → Grok Bot</p>
            <p className="mt-2 text-sm text-slate-400">
              ルーティン・Pages・webhookで「動き続ける仕組み」を作れる。
              X情報の収集と開発まわりはこちらの独壇場。
            </p>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-line bg-panel/80 p-6 text-left">
          <p className="font-semibold text-slate-100">運用で効いた3つのルール</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>・各Botに<b className="text-slate-200">専門と出し方のルールを最初に詰める</b>(解説フォーマット・出典明記・日本語固定)</li>
            <li>・通知は<b className="text-slate-200">「役に立つときだけ」</b>に絞る。ノイズを増やすBotは信用を失う</li>
            <li>・送信・購入・削除など<b className="text-slate-200">不可逆な操作は必ず承認制</b>、ログを定期的に眺めて任せ方を調整</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'sources',
    section: 'まとめ',
    title: '出典・参考リンク',
    content: (
      <div className="stagger">
        <SlideHead
          accent="muse" no="18"
          kicker="References"
          title="この資料のエビデンス"
          sub="製品仕様はすべて一次情報(公式サイト・公式ブログ・公式ドキュメント)で確認済み"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-muse/40 bg-muse/5 p-6 text-left">
            <p className="font-semibold text-muse">Muse(Meta)</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>・muse.ai — 公式トップ</li>
              <li>・muse.ai/blog/how-we-designed-muse — 設計思想(Mona Sarantakos, 2026/9/8)</li>
              <li>・muse.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse — Sentinel/VM/eBPF実装(Tarek Sheasha)</li>
              <li>・meta.com/help — 購入フロー・承認の仕組み</li>
              <li>・stripe.com/newsroom — Link agent wallet発表(2026/9/8)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-grok/40 bg-grok/5 p-6 text-left">
            <p className="font-semibold text-grok">Grok Bot(xAI)</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>・x.ai/bot — 公式トップ・料金</li>
              <li>・x.ai/news/grok-bot-1-0 — 1.0発表(2026/11/11)</li>
              <li>・docs.x.ai/grok-bot/meetings — 会議参加の仕様</li>
              <li>・docs.x.ai/grok-bot/microsoft-teams — Teams連携</li>
              <li>・x.ai/changelog/bot — 機能更新履歴</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          「自分の使い方」パートは実際のローカル利用データ・ログイン済み画面からの実測(2026/10〜11)
        </p>
      </div>
    ),
  },
  {
    id: 'closing',
    section: 'まとめ',
    title: 'まとめ',
    content: (
      <div className="stagger flex flex-col items-center text-center">
        <p className="kicker text-slate-500">Wrap Up</p>
        <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-snug tracking-tight text-slate-50 md:text-5xl">
          「使う」から
          <br />
          「組織化して任せる」へ
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          質問に答えるAIの先には、自分の代わりに動き続ける仕組みがある。
          小さく任せて、確かめて、広げる。
        </p>
        <div className="mt-12 grid w-full gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-muse/40 bg-muse/5 p-6">
            <p className="text-xl font-bold text-muse">Muse</p>
            <p className="mt-2 text-sm text-slate-300">Spaceアプリを量産する、先回りする個人秘書</p>
            <a href="https://muse.ai" target="_blank" rel="noreferrer"
               className="mt-4 inline-block text-sm text-muse underline underline-offset-4">
              muse.ai ↗
            </a>
          </div>
          <div className="rounded-2xl border border-grok/40 bg-grok/5 p-6">
            <p className="text-xl font-bold text-grok">Grok Bot</p>
            <p className="mt-2 text-sm text-slate-300">役割を与えて増やせる、24/7の専門スタッフ</p>
            <a href="https://x.ai/bot" target="_blank" rel="noreferrer"
               className="mt-4 inline-block text-sm text-grok underline underline-offset-4">
              x.ai/bot ↗
            </a>
          </div>
        </div>
        <p className="mt-14 text-sm text-slate-500">
          LT勉強会 2026.11.19 —{' '}
          <a href="https://x.com/morimoli_777" target="_blank" rel="noreferrer"
             className="text-slate-400 underline underline-offset-4">
            @morimoli_777
          </a>
        </p>
      </div>
    ),
  },
]
