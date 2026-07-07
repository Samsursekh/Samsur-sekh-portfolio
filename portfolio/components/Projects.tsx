const PROJECTS = [
  {
    tag: "E-COMMERCE",
    title: "Scaling a DTC Skincare Brand to 7-Figures",
    result: "312% Revenue Growth",
    detail:
      "Rebuilt the Meta + Google acquisition stack, restructured the catalog feed, and shipped a CRO overhaul that lifted checkout conversion by 41%.",
    stats: [
      { label: "ROAS", value: "4.8x" },
      { label: "CAC", value: "-38%" },
    ],
  },
  {
    tag: "SAAS",
    title: "Pipeline Engine for a B2B Analytics Platform",
    result: "2.4x Qualified Leads",
    detail:
      "Designed a full-funnel demand-gen system across Google Search, LinkedIn, and lifecycle email, tied to a closed-loop attribution dashboard.",
    stats: [
      { label: "CPL", value: "-46%" },
      { label: "MQL→SQL", value: "+61%" },
    ],
  },
  {
    tag: "MARKETPLACE",
    title: "Category Domination for a Fitness App",
    result: "1M+ Installs in 6 Months",
    detail:
      "Ran a UA program spanning Apple Search Ads, TikTok, and creator partnerships, backed by rigorous MMM to protect margin at scale.",
    stats: [
      { label: "CPI", value: "-29%" },
      { label: "D30 Retention", value: "+18%" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-section-gap relative border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-display text-[32px] md:text-headline-lg text-on-surface mb-4 font-semibold">
            Selected Case Studies
          </h2>
          <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto">
            A track record of engineered growth across e-commerce, SaaS, and marketplace brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="glass-panel rounded-2xl border border-outline-variant/20 hover-glow transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="p-8 flex flex-col gap-5 flex-1">
                <span className="inline-flex w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold tracking-widest uppercase">
                  {project.tag}
                </span>

                <h3 className="font-display text-[22px] text-on-surface font-semibold leading-snug">
                  {project.title}
                </h3>

                <p className="gradient-text font-display text-[26px] font-bold">{project.result}</p>

                <p className="text-on-surface-variant text-body-md flex-1">{project.detail}</p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-primary font-display text-[20px] font-bold">{stat.value}</div>
                      <div className="text-on-surface-variant text-[10px] font-semibold uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
