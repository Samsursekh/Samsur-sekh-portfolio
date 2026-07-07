const SKILLS = [
  "Meta Ads Expertise",
  "Google Ads (Search & Shopping)",
  "Google Analytics 4",
  "Conversion Rate Optimization",
  "Looker Studio Dashboards",
  "GTM Implementation",
];

export default function Skills() {
  return (
    <section className="py-section-gap relative bg-surface-container-lowest/50 border-y border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="flex flex-wrap justify-center gap-4">
          {SKILLS.map((skill) => (
            <div
              key={skill}
              className="px-6 py-3 rounded-full glass-panel border border-primary/10 text-primary-fixed-dim text-[12px] font-semibold tracking-widest uppercase hover-glow cursor-default transition-all"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
