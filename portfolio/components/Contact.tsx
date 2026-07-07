"use client";

import { useState } from "react";

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.5 9.5h2.88V18H5.5zM10.3 9.5h2.76v1.16h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.44 1.91 3.44 4.39V18H16.3v-7.54c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.9 1.96-2.9 3.98V18H10.3z" />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-section-gap relative bg-surface-container-lowest/50 border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[32px] md:text-headline-lg text-on-surface mb-6 font-semibold">
              Let&apos;s build your growth engine.
            </h2>
            <p className="text-on-surface-variant text-body-lg mb-10">
              Tell me about your brand and where growth is stalling. I reply personally within one
              business day.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <div className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest mb-1">
                  Phone
                </div>
                <a
                  href="tel:+919339316583"
                  className="text-on-surface text-body-lg hover:text-primary transition-colors"
                >
                  +91 9339316583
                </a>
              </div>
              <div>
                <div className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest mb-1">
                  Email
                </div>
                <a
                  href="mailto:samsur.sekh.masai@gmail.com"
                  className="text-on-surface text-body-lg hover:text-primary transition-colors"
                >
                  samsur.sekh.masai@gmail.com
                </a>
              </div>
              <div>
                <div className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest mb-1">
                  Location
                </div>
                <a
                  href="https://www.google.co.in/maps/place/Kolkata,+West+Bengal/@22.6759958,88.3297288,99193m/data=!3m2!1e3!4b1!4m5!3m4!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.572646!4d88.363895?hl=en&authuser=0"
                  target="_blank"
                  rel="noreferrer"
                  className="text-on-surface text-body-lg hover:text-primary transition-colors"
                >
                  Kolkata, West Bengal
                </a>
              </div>
              <div>
                <div className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest mb-1">
                  Social
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/samsur-sekh-b6961a22b/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit LinkedIn profile"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-lowest text-on-surface transition-all hover:border-primary hover:text-primary"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href="https://github.com/Samsursekh"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit GitHub profile"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-lowest text-on-surface transition-all hover:border-primary hover:text-primary"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.55v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.74-1.57-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 5.8 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="glass-panel rounded-2xl border border-primary/30 p-10 text-center glow-primary">
                <h3 className="font-display text-[24px] text-on-surface mb-2 font-semibold">
                  Message sent.
                </h3>
                <p className="text-on-surface-variant text-body-md">
                  Thanks for reaching out — I&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel rounded-2xl border border-outline-variant/20 p-8 flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="bg-[#0a0a0a] border border-outline-variant/30 rounded-md px-4 py-3 text-on-surface text-body-md outline-none focus:border-primary transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-[#0a0a0a] border border-outline-variant/30 rounded-md px-4 py-3 text-on-surface text-body-md outline-none focus:border-primary transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="bg-[#0a0a0a] border border-outline-variant/30 rounded-md px-4 py-3 text-on-surface text-body-md outline-none focus:border-primary transition-colors"
                    placeholder="Company name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="bg-[#0a0a0a] border border-outline-variant/30 rounded-md px-4 py-3 text-on-surface text-body-md outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your growth goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="self-start px-8 py-4 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-black text-[12px] font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity glow-primary"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
