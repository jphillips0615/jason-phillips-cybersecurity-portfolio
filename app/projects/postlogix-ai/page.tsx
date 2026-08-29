import { ArrowLeft, ArrowUpRight, BarChart3, BrainCircuit, GitCompareArrows, Github, LineChart, LockKeyhole, Sparkles } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Campaign Scoring',
    text: 'Turns opens, clicks, click-to-open rate, unsubscribes, and campaign context into a structured performance score and breakdown.'
  },
  {
    icon: Sparkles,
    title: 'Smart Recommendations',
    text: 'Surfaces practical recommendations around subject lines, calls to action, audience fatigue, targeting, and controlled next tests.'
  },
  {
    icon: GitCompareArrows,
    title: 'Campaign Comparison',
    text: 'Compares saved campaigns side by side and highlights which campaign leads across the most important performance metrics.'
  },
  {
    icon: LineChart,
    title: 'Trend Analysis',
    text: 'Uses saved campaign history to identify directional movement, strongest campaigns, and the metrics changing most over time.'
  },
  {
    icon: BrainCircuit,
    title: 'AI Campaign Insights',
    text: 'Combines performance metrics, subject-line structure, email content, and existing findings into deeper recommendations and next actions.'
  },
  {
    icon: LockKeyhole,
    title: 'Authenticated Accounts',
    text: 'Supports account-based access so campaign history, analyses, comparisons, and saved insights remain associated with the signed-in user.'
  },
]

const screenshots = [
  {
    src: '/postlogix-landing.webp',
    alt: 'PostLogix AI public beta landing page',
    caption: 'Public Beta Landing Page — introduces campaign scoring, comparisons, trend analysis, and AI-assisted recommendations.'
  },
  {
    src: '/postlogix-dashboard.webp',
    alt: 'PostLogix AI dashboard showing campaign performance and score breakdown',
    caption: 'Campaign Dashboard — saved campaign metrics are summarized into a score, selected analysis, and weighted performance breakdown.'
  },
  {
    src: '/postlogix-recommendations.webp',
    alt: 'PostLogix AI smart recommendations and recent campaigns',
    caption: 'Smart Recommendations — campaign signals are translated into practical suggestions instead of being presented as raw metrics only.'
  },
  {
    src: '/postlogix-comparison.webp',
    alt: 'PostLogix AI side-by-side campaign comparison',
    caption: 'Campaign Comparison — two saved sends can be compared side by side with an overall edge and metric-level differences.'
  },
  {
    src: '/postlogix-trends.webp',
    alt: 'PostLogix AI campaign trend analysis dashboard',
    caption: 'Trend Analysis — historical campaign data is used to identify improving and declining metrics and generate a next-campaign plan.'
  },
  {
    src: '/postlogix-ai-insights.webp',
    alt: 'PostLogix AI AI Campaign Insights section',
    caption: 'AI Campaign Insights — metrics, subject-line structure, content signals, and performance findings are synthesized into deeper recommendations.'
  },
]

const stack = ['Next.js','TypeScript','Supabase','Vercel','Authentication','Persistent User Data','Campaign Scoring','AI Integration','Responsive UI']

export default function PostLogixCaseStudy() {
  return (
    <main className="site-shell min-h-screen overflow-x-hidden text-cyber-text">
      <div className="site-atmosphere" aria-hidden="true">
        <div className="telemetry-rings telemetry-rings-left" />
        <div className="telemetry-rings telemetry-rings-right" />
        <div className="telemetry-traces" />
        <div className="telemetry-sweep" />
        <div className="telemetry-nodes" />
        <div className="telemetry-vignette" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:py-14 lg:px-8">
        <a href="/#projects" className="project-link"><ArrowLeft size={14}/> BACK TO PORTFOLIO</a>

        <header className="mt-12 max-w-4xl">
          <p className="font-mono text-[10px] tracking-[.28em] text-cyber-red">SAAS // CASE STUDY</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-.045em] text-white sm:text-6xl">PostLogix AI</h1>
          <div className="mt-5 inline-flex rounded-full border border-cyber-red/30 bg-cyber-red/[.055] px-3 py-1.5 font-mono text-[9px] tracking-[.14em] text-white">PUBLIC BETA // LIVE</div>
          <p className="mt-7 text-lg leading-8 text-cyber-secondary">A full-stack email campaign analytics product built to help marketers understand what their campaign data is actually telling them. PostLogix scores individual campaigns, compares historical sends, surfaces trends, and translates performance signals into practical recommendations and AI-assisted next steps.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://postlogix-ai.vercel.app" target="_blank" rel="noreferrer" className="btn-primary">VIEW LIVE BETA <ArrowUpRight size={15}/></a>
            <a href="https://github.com/jphillips0615/postlogix-ai" target="_blank" rel="noreferrer" className="btn-secondary"><Github size={15}/> VIEW GITHUB</a>
          </div>
        </header>

        <section className="mt-12 panel-card p-3 sm:p-4">
          <img src="/postlogix-dashboard.webp" alt="PostLogix AI campaign dashboard" className="w-full rounded-2xl border border-white/10" />
        </section>

        <section className="mt-16">
          <p className="panel-kicker">PRODUCT CAPABILITIES</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">From Raw Metrics to Useful Decisions</h2>
          <p className="mt-4 max-w-3xl leading-7 text-cyber-secondary">The product is designed around the idea that campaign data is only useful when it helps someone decide what to do next. The workflow combines deterministic scoring and historical comparison with recommendation logic and optional AI-assisted interpretation.</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({icon: Icon, title, text}) => (
              <div key={title} className="panel-card">
                <Icon size={21} className="text-cyber-red"/>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-cyber-secondary">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-5 lg:grid-cols-2">
          <div className="panel-card">
            <p className="panel-kicker">FULL-STACK WORK</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">What the Build Demonstrates</h2>
            <p className="mt-4 leading-7 text-cyber-secondary">PostLogix goes beyond a static dashboard. It includes authenticated account flows, saved user data, reusable analytics components, campaign-scoring logic, historical comparison, recommendation systems, AI-assisted analysis, and a production deployment workflow.</p>
            <div className="mt-6 flex flex-wrap gap-2">{stack.map((item) => <span className="skill-pill" key={item}>{item}</span>)}</div>
          </div>
          <div className="panel-card">
            <p className="panel-kicker">PRODUCTION STATUS</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Deployed Public Beta</h2>
            <div className="mt-6 space-y-3 font-mono text-xs text-cyber-secondary">
              <p><span className="text-cyber-red">APP</span> // PostLogix AI</p>
              <p><span className="text-cyber-red">STATUS</span> // PUBLIC BETA</p>
              <p><span className="text-cyber-red">HOST</span> // VERCEL</p>
              <p><span className="text-cyber-red">DATA / AUTH</span> // SUPABASE</p>
              <p><span className="text-cyber-red">SOURCE</span> // GITHUB</p>
            </div>
            <p className="mt-5 text-sm leading-6 text-cyber-muted">The live beta remains an evolving product. Features, scoring behavior, and AI-assisted workflows can continue to change as the application is tested and refined.</p>
          </div>
        </section>

        <section className="mt-16">
          <p className="panel-kicker">PRODUCT EVIDENCE</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Screens from the Live Application</h2>
          <p className="mt-4 max-w-3xl leading-7 text-cyber-secondary">These captures show the deployed product rather than design mockups: the public beta, authenticated dashboard, campaign recommendations, comparisons, trend analysis, and AI-assisted insight workflow.</p>
          <div className="evidence-grid mt-7">
            {screenshots.map((shot) => (
              <figure key={shot.src} className="evidence-card">
                <a href={shot.src} target="_blank" rel="noreferrer"><img src={shot.src} alt={shot.alt} loading="lazy" /></a>
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-cyber-red/20 bg-cyber-red/[.035] p-6 sm:p-8">
          <p className="font-mono text-[10px] tracking-[.2em] text-cyber-red">TECHNICAL RELEVANCE</p>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-cyber-secondary">The project demonstrates product thinking alongside implementation: authenticated full-stack flows, persistent data, custom business logic, analytics presentation, AI integration, deployment, debugging, and iterative feature development in a real user-facing application.</p>
        </section>

        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8 font-mono text-[10px] tracking-[.12em] text-cyber-muted">
          <span>JASON PHILLIPS // SOFTWARE + CYBERSECURITY</span>
          <a href="/#projects" className="inline-flex items-center gap-2 text-white transition hover:text-cyber-red">RETURN TO SELECTED WORK <ArrowUpRight size={12}/></a>
        </footer>
      </div>
    </main>
  )
}
