export default function About() {
  return (
    <section className="py-section-gap relative" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl z-0" />
            <div className="relative z-10 rounded-2xl overflow-hidden glass-panel p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Samsur Sekh Portrait"
                className="w-full h-auto rounded-xl object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgj5W5v5Kdz7xwdEGomfI78arPV5xv_h4IxXE81UqAR2tJW20GgMlJdI4Lt5aJXS7CFzyu0wEvt1iifypFwfPbqtKrSt5sXSJQpZUbL5BCAcwcMPnqwkwlaZHT-OB7geakDpsP1v96XRRpED3KH6j33b5AEIUcA-pcMEYeaTtzsuv0P4VkhFStIwZKNl7y-DKakqwSZBH6K6HkpJu42TQ0yEC_P5i8beerlwgrz-EVmhmyPKlxz_xl0sw653SL9mxXLA"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-[28px] md:text-headline-lg text-on-surface mb-6 font-semibold">
              Mastering the intersection of Data &amp; Creative.
            </h2>
            <p className="text-on-surface-variant text-body-lg mb-8">
              I am a specialized digital marketing consultant focused on engineered growth. I don&apos;t
              just run ads; I build scalable acquisition engines. By combining rigorous data analysis
              with high-impact creative strategy, I help ambitious brands dominate their market share.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-6 rounded-xl border border-outline-variant/20 hover-glow transition-all">
                <div className="text-primary font-display text-[32px] md:text-[40px] mb-2 font-bold">$5M+</div>
                <div className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest">
                  Ad Spend Managed
                </div>
              </div>
              <div className="glass-panel p-6 rounded-xl border border-outline-variant/20 hover-glow transition-all">
                <div className="text-primary font-display text-[32px] md:text-[40px] mb-2 font-bold">3.5x</div>
                <div className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest">
                  Average ROAS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
