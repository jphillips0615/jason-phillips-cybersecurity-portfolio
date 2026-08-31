import { ArrowLeft, ArrowUpRight, BrainCircuit, Coins, Github, KeyRound, Layers3, Music2, SlidersHorizontal } from 'lucide-react'

const features = [
  {
    icon: KeyRound,
    title: 'Authentication & Accounts',
    text: 'Supabase-backed sign-in and account flows support persistent user identity while keeping the product experience separated from guest access.'
  },
  {
    icon: SlidersHorizontal,
    title: 'Creation Studio',
    text: 'A detailed song-building interface captures idea, sound, quality, genre, mood, vocal type, artist voice, target length, structure, and lyrical direction.'
  },
  {
    icon: BrainCircuit,
    title: 'Aria Producer Experience',
    text: 'Aria is designed as an optional AI-producer layer that reviews a creative brief and offers production direction without silently changing the creator’s work.'
  },
  {
    icon: Coins,
    title: 'Credits & Pricing Model',
    text: 'The product includes a planned credit-based usage model and tiered pricing UI so generation cost can map cleanly to an external provider later.'
  },
  {
    icon: Layers3,
    title: 'Provider-Ready Product Layer',
    text: 'The interface, user flows, state model, generation summary, and surrounding product architecture are built independently from the final music-generation provider.'
  },
  {
    icon: Music2,
    title: 'Creator-Centered Workflow',
    text: 'The experience is structured around evolving an idea instead of restarting it: describe, refine, review, generate, save, and continue developing a track.'
  },
]

const screenshots = [
  {
    src: '/audiora-landing.webp',
    alt: 'Audiora AI landing page with Make Music Beyond Limits hero',
    caption: 'Product Landing — the public-facing concept and creator-first positioning are already implemented as a polished application experience.'
  },
  {
    src: '/audiora-login.webp',
    alt: 'Audiora AI login and account creation interface',
    caption: 'Authentication — sign-in, account creation, guest access, and Supabase-backed account handling are represented in the implemented UI.'
  },
  {
    src: '/audiora-studio.webp',
    alt: 'Audiora AI creation studio with song prompt and settings',
    caption: 'Creation Studio — users can describe a song and configure vocal type, artist voice, target length, and other core generation parameters.'
  },
  {
    src: '/audiora-studio-settings.webp',
    alt: 'Audiora AI creation settings for sound, genre, mood, and generation summary',
    caption: 'Creative Controls — sound direction, qualities, genres, moods, journey, structure, and generation summary are organized into one workflow.'
  },
  {
    src: '/audiora-studio-lyrics.webp',
    alt: 'Audiora AI lyrics editor, Aria producer section, credit count, and generate button',
    caption: 'Lyrics + Generation State — lyrics, Aria guidance, available credits, generation cost, and provider handoff are represented in the application flow.'
  },
  {
    src: '/audiora-aria.webp',
    alt: 'Audiora AI Aria producer concept interface',
    caption: 'Aria Producer — an optional advisory experience is designed to provide direction on mood, pacing, arrangement, and production choices.'
  },
  {
    src: '/audiora-workflow.webp',
    alt: 'Audiora AI how it works workflow from idea to finished track',
    caption: 'Product Workflow — describe the sound, review producer notes, refine details, then save and share the resulting work.'
  },
  {
    src: '/audiora-pricing.webp',
    alt: 'Audiora AI Free Creator and Pro pricing tiers',
    caption: 'Monetization Model — Free, Creator, and Pro tiers are designed around generation credits so provider cost can be reflected in usage.'
  },
]

const stack = ['Next.js','TypeScript','Supabase','Authentication','Responsive UI','Product Design','Credit Logic','Generation Workflow','API Architecture']

export default function AudioraCaseStudy() {
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
          <p className="font-mono text-[10px] tracking-[.28em] text-cyber-red">FULL-STACK PRODUCT // CASE STUDY</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-.045em] text-white sm:text-6xl">Audiora AI</h1>
          <div className="mt-5 inline-flex rounded-full border border-cyber-red/30 bg-cyber-red/[.055] px-3 py-1.5 font-mono text-[9px] tracking-[.14em] text-white">IN DEVELOPMENT // GENERATION API INTEGRATION PENDING</div>
          <p className="mt-7 text-lg leading-8 text-cyber-secondary">Audiora is an AI-assisted music creation product built around the idea that creators should be able to shape and evolve a track instead of repeatedly starting from scratch. The product layer includes authentication, account flows, pricing and credits, a detailed creation studio, lyrical controls, generation summaries, and an AI-producer experience called Aria.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://github.com/jphillips0615/audiora-ai" target="_blank" rel="noreferrer" className="btn-primary"><Github size={15}/> VIEW GITHUB</a>
          </div>
        </header>

        <section className="mt-12 panel-card p-3 sm:p-4">
          <img src="/audiora-studio.webp" alt="Audiora AI creation studio interface" className="w-full rounded-2xl border border-white/10" />
        </section>

        <section className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <div className="panel-card">
            <p className="panel-kicker">CURRENT DEVELOPMENT CONSTRAINT</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">The Product Layer Exists. The Generation Provider Is the Missing Piece.</h2>
            <p className="mt-4 leading-7 text-cyber-secondary">Audiora’s product interface, Supabase authentication, account flows, credit model, creation studio, and production workflow are implemented. The remaining major integration is the underlying music-generation provider.</p>
            <p className="mt-4 leading-7 text-cyber-secondary">That provider is intentionally still under evaluation because generation quality, licensing terms, scalability, reliability, and per-generation operating cost directly affect whether the product can be launched responsibly.</p>
            <div className="mt-6 rounded-2xl border border-cyber-red/20 bg-black/25 p-4 font-mono text-[10px] leading-6 tracking-[.1em] text-cyber-secondary">
              NEXT MILESTONE <span className="text-cyber-red">//</span> INTEGRATE A PRODUCTION-GRADE MUSIC GENERATION API + BEGIN CONTROLLED BETA TESTING
            </div>
          </div>
          <div className="panel-card">
            <p className="panel-kicker">COLLABORATION SIGNAL</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Built Far Enough to Evaluate the Opportunity</h2>
            <p className="mt-4 leading-7 text-cyber-secondary">This case study is intentionally transparent about the missing provider rather than presenting simulated generation as a completed feature. The implemented product makes the remaining technical and commercial dependency easy to understand.</p>
            <div className="mt-6 space-y-3 font-mono text-[10px] leading-5 text-cyber-secondary">
              <p><span className="text-cyber-red">OPEN TO</span> // API PARTNERSHIPS</p>
              <p><span className="text-cyber-red">OPEN TO</span> // TECHNICAL COLLABORATION</p>
              <p><span className="text-cyber-red">OPEN TO</span> // EARLY-STAGE PRODUCT SUPPORT</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <p className="panel-kicker">IMPLEMENTED PRODUCT SURFACE</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">A Product Around the Model — Not Just a Generate Button</h2>
          <p className="mt-4 max-w-3xl leading-7 text-cyber-secondary">Audiora was designed as a complete creator workflow around generation. The interface already models the information a generation provider needs and the surrounding account, credit, guidance, and continuation experiences a user needs.</p>
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
            <p className="panel-kicker">TECHNICAL WORK</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">What the Build Demonstrates</h2>
            <p className="mt-4 leading-7 text-cyber-secondary">Even before provider integration, the project demonstrates authenticated application flows, complex form and state design, a multi-stage creative workflow, product architecture, monetization planning, reusable UI systems, and the ability to isolate a high-cost external dependency behind a product interface.</p>
            <div className="mt-6 flex flex-wrap gap-2">{stack.map((item) => <span className="skill-pill" key={item}>{item}</span>)}</div>
          </div>
          <div className="panel-card">
            <p className="panel-kicker">ACCURACY NOTE</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">No Fake Generation Claims</h2>
            <p className="mt-4 leading-7 text-cyber-secondary">The screenshots below show the implemented application and product workflow. They do not represent a completed production music-generation integration. The final provider/API remains pending and the portfolio labels that constraint directly.</p>
          </div>
        </section>

        <section className="mt-16">
          <p className="panel-kicker">PRODUCT EVIDENCE</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Screens from the Current Build</h2>
          <p className="mt-4 max-w-3xl leading-7 text-cyber-secondary">The current application already includes a cohesive landing experience, authentication, the core creation studio, producer guidance, credit/pricing concepts, and a defined creator workflow.</p>
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
          <p className="font-mono text-[10px] tracking-[.2em] text-cyber-red">PORTFOLIO RELEVANCE</p>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-cyber-secondary">Audiora demonstrates that the development work in this portfolio extends beyond isolated exercises. It shows product architecture, authentication, user experience, monetization logic, external-service planning, and the ability to build a substantial application surface while being explicit about the one infrastructure dependency still preventing launch.</p>
        </section>

        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8 font-mono text-[10px] tracking-[.12em] text-cyber-muted">
          <span>JASON PHILLIPS // SOFTWARE + CYBERSECURITY</span>
          <a href="/#projects" className="inline-flex items-center gap-2 text-white transition hover:text-cyber-red">RETURN TO SELECTED WORK <ArrowUpRight size={12}/></a>
        </footer>
      </div>
    </main>
  )
}
