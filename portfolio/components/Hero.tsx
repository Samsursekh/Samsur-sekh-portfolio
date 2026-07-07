import ShaderBackground from "./ShaderBackground";

export default function Hero() {
  return (
    <header id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ShaderBackground />

      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(134,147,154,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(134,147,154,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-[12px] font-semibold tracking-widest uppercase">
            Available for new projects
          </span>
        </div>

        <h1 className="font-display text-[40px] leading-[1.1] md:text-display-lg text-on-surface max-w-4xl mb-6 font-bold tracking-tight">
          Performance Marketing That Doesn&apos;t Chase Clicks. <br />
          <span className="gradient-text">It Builds Businesses.</span>
        </h1>

        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          Data-driven growth strategies, precision media buying, and conversion optimization for
          high-scale e-commerce and SaaS brands.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-black text-[12px] font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-2 glow-primary"
          >
            View Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="/samsur-sekh-resume.pdf"
            download
            className="px-8 py-4 rounded-full glass-panel text-on-surface text-[12px] font-semibold tracking-widest uppercase hover-glow transition-all flex items-center justify-center"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full glass-panel text-on-surface text-[12px] font-semibold tracking-widest uppercase hover-glow transition-all flex items-center justify-center"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}
