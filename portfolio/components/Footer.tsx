export default function Footer() {
  return (
    <footer className="w-full py-section-gap bg-background border-t border-outline-variant/20 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-8">
        <div className="font-display text-[24px] text-on-surface font-semibold">Samsur Sekh</div>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            className="text-outline hover:text-on-surface transition-colors text-[12px] font-semibold uppercase tracking-widest"
            href="https://www.linkedin.com/in/samsur-sekh-b6961a22b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-outline hover:text-on-surface transition-colors text-[12px] font-semibold uppercase tracking-widest"
            href="https://github.com/Samsursekh"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="text-outline hover:text-on-surface transition-colors text-[12px] font-semibold uppercase tracking-widest" href="#projects">
            Case Studies
          </a>
          <a className="text-outline hover:text-on-surface transition-colors text-[12px] font-semibold uppercase tracking-widest" href="#">
            Privacy
          </a>
        </div>

        <div className="text-on-surface-variant text-[10px] tracking-widest uppercase">
          © {new Date().getFullYear()} Samsur Sekh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
