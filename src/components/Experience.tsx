import React from "react";

interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
}

const EXPERIENCES: Experience[] = [
  {
    role: "Web Developer",
    company: "Developers Hideout PH Web Programming Services",
    period: "February 2024 – March 5, 2026",
    type: "Full-time",
    description:
      "Leading frontend development for the company's main platform, building scalable React components and maintaining code quality across the team.",
    highlights: [
      "Built and shipped 10+ production features using Wordpress Elementor Pro",
      "Performed content updates and UI adjustments to ensure accurate and up-to-date website information.",
      "Implemented WCAG accessibility standards to improve usability and inclusivity for all users.",
      "Conducted color contrast checks to ensure text and UI elements meet accessibility compliance requirements.",
      "Added and optimized ARIA labels and semantic HTML to improve accessibility for screen readers and assistive technologies.",
      "Ensured responsive layouts and cross-browser compatibility across different devices and screen sizes.",
      "Tested and validated accessibility improvements using accessibility tools and browser developer tools.",
      "Identified and fixed UI and accessibility issues to maintain WCAG-compliant web experiences.",
      "Reduced page load time by 35% through code splitting and lazy loading",
      "Established component library used across 3 internal products",
      "Developed, maintained, and supported production web applications using React.js, TypeScript, and Tailwind CSS",
      "Built reusable and responsive UI components while ensuring performance and usability standards",
      "Implemented and customized WordPress (Elementor) websites and managed Shopify/WooCommerce e-commerce platforms based on business requirements",
      "Integrated frontend applications with MySQL-backed APIs and supported deployment workflows",
    ],
  },
  {
    role: "Application Analyst",
    company: "Eclaro",
    period: "September 2023 – February 2025",
    type: "Contractual",
    description:
      "In my role as an Application Analyst, I used Salesforce to manage and resolve client-reported issues through the case management system. I analyzed the problems, investigated the root cause, and provided solutions to ensure the applications were functioning properly. I also used Citrix to securely access client systems when troubleshooting issues directly within their environment.",
    highlights: [
      "Managed and resolved client-reported issues using Salesforce Case Management, ensuring timely tracking, investigation, and resolution of support requests.",
      "Provided technical support for enterprise-level applications and internal user portals, assisting users with system functionality and issue resolution.",
      "Investigated and analyzed application issues by gathering technical details, logs, and user reports to identify root causes and recommend solutions.",
      "Assisted users with account authentication, document uploads, and system navigation, improving overall user experience and system accessibility.",
      "Utilized Citrix-based environments to securely access client systems and perform troubleshooting within remote enterprise applications.",
      "Documented incidents, troubleshooting steps, and resolutions to maintain accurate case records and knowledge base documentation.",
      "Collaborated with internal teams to escalate complex issues and ensure efficient problem resolution.",
      "Developed strong problem-solving, technical analysis, and communication skills while supporting multiple users and applications in a service-driven environment.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
          Career
        </p>
        <h2
          id="experience-heading"
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12"
        >
          Work Experience
        </h2>

        {/* Timeline */}
        <ol className="relative flex flex-col gap-0" aria-label="Work experience timeline">
          {EXPERIENCES.map((exp, index) => (
            <li
              key={`${exp.company}-${exp.period}`}
              className="relative pl-8 pb-10 last:pb-0"
            >
              {/* Timeline line — runs below every item including the last */}
              <div
                className="absolute left-[11px] top-6 bottom-0 w-px bg-slate-200 dark:bg-slate-700"
                aria-hidden="true"
              />

              {/* Timeline dot */}
              <div
                className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-slate-900 flex items-center justify-center"
                aria-hidden="true"
              />

              <div className="ml-4">
                <div className="flex flex-wrap items-start gap-x-3 gap-y-1 mb-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                    {exp.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </span>
                  <time className="text-sm text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </time>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  {exp.description}
                </p>

                <ul
                  className="flex flex-col gap-1.5"
                  aria-label={`Key highlights at ${exp.company}`}
                >
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
