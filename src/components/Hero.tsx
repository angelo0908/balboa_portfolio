import React from "react";

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TECH_STACK = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "Salesforce",
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden"
    >
      {/* Background ambient glows — decorative only */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-24 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* ── Left: Text Content ── */}
          <div className="flex-1 max-w-xl animate-fade-in-up">

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
              role="status"
              aria-label="Currently available for opportunities"
            >
              <span
                className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                aria-hidden="true"
              />
              {/* emerald-400 on emerald-500/10 bg → contrast ~4.6:1 ✓ AA */}
              <span className="text-xs font-medium text-emerald-400 tracking-wide">
                Available for opportunities
              </span>
            </div>

            {/* Name — white on slate-950 → contrast ~18:1 ✓ AAA */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight text-white mb-3"
            >
              Mark Angelo Balboa
            </h1>

            {/* Role — blue-400 on slate-950 → contrast ~5.7:1 ✓ AA */}
            <p
              className="text-base font-semibold text-blue-400 mb-5 tracking-wide uppercase"
              aria-label="Web Developer and BSIT Graduate"
            >
              Web Developer
              <span className="mx-2 text-slate-600" aria-hidden="true">|</span>
              BSIT Graduate
            </p>

            {/* Description — slate-300 on slate-950 → contrast ~10.7:1 ✓ AAA */}
            <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-lg">
              Web Developer specializing in responsive, high-performance websites
              and applications using React, TypeScript, Tailwind CSS, and
              WordPress. Experienced in supporting production systems and
              resolving user and system issues. Strong analytical skills with a
              focus on system reliability, technical evaluation, and informed
              decision-making.
            </p>

            {/* Tech stack pills */}
            <div
              className="flex flex-wrap gap-2 mb-9"
              role="list"
              aria-label="Tech stack"
            >
              {TECH_STACK.map((tech) => (
                /* slate-300 on slate-800 bg → contrast ~6.5:1 ✓ AA */
                <span
                  key={tech}
                  role="listitem"
                  className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-3"
              role="group"
              aria-label="Primary actions"
            >
              {/* Download CV — white on blue-600 → contrast ~5.9:1 ✓ AA */}
              <a
                href="/BALBOA_RESUME.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 focus-visible:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-95"
                aria-label="Download Mark Angelo Balboa's CV (PDF)"
              >
                <DownloadIcon className="w-4 h-4" />
                Download CV
              </a>

              {/* Get In Touch — slate-200 on transparent/slate-950 → contrast ~14:1 ✓ AAA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-transparent border border-slate-600 hover:border-slate-400 focus-visible:border-slate-400 text-slate-200 hover:text-white focus-visible:text-white text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-95"
              >
                <MailIcon className="w-4 h-4" />
                Get In Touch
              </a>

              {/* GitHub icon button */}
              <a
                href="https://github.com/angelo0908"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Mark Angelo Balboa's GitHub profile (opens in new tab)"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-transparent border border-slate-600 hover:border-slate-400 focus-visible:border-slate-400 text-slate-300 hover:text-white focus-visible:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-95"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              {/* LinkedIn icon button */}
              <a
                href="https://www.linkedin.com/in/mark-angelo-balboa-a88373382/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Mark Angelo Balboa's LinkedIn profile (opens in new tab)"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-transparent border border-slate-600 hover:border-slate-400 focus-visible:border-slate-400 text-slate-300 hover:text-white focus-visible:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-95"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── Right: Profile Photo — no circle, natural crop ── */}
          <div
            className="flex-shrink-0 animate-fade-in"
            aria-hidden="true"
          >
            {/* Decorative — name already in h1 */}
            <div className="relative w-64 sm:w-72 lg:w-80">
              {/* Soft ambient glow behind photo */}
              <div
                className="absolute -inset-4 rounded-3xl bg-blue-600/15 blur-2xl"
                aria-hidden="true"
              />

              {}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl">
                <img
                  src="/balboa.png"
                  alt=""
                  role="presentation"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.opacity = "0";
                  }}
                />

                {/* Gradient fade — bottom of photo blends into page bg */}
                <div
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div
          className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs text-slate-500 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
