import React from "react";

const SKILLS = [
  {
    category: "Programming & Web Technologies",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Application & Production Support",
    items: [
      "Application Troubleshooting",
      "Incident & Issue Resolution",
      "Production System Support",
      "Root Cause Analysis (RCA)",
      "User & Stakeholder Support",
    ],
  },
  {
    category: "Infrastructure & Cloud",
    items: ["AWS (EC2, S3)", "Server Monitoring & Maintenance"],
  },
  {
    category: "Platforms & Tools",
    items: [
      "Git",
      "GitHub",
      "WordPress (Elementor)",
      "Shopify",
      "WooCommerce",
      "Salesforce",
      "Citrix",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL"],
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
          About Me
        </p>
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12"
        >
          Background & Skills
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Bio */}
          <div>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">
              I'm a BSIT graduate from the University of Caloocan City and a
              results-driven technical professional with 2 years of experience
              in a startup environment — combining web development, application
              support, and system troubleshooting.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">
              I specialize in building responsive, high-performance web
              applications using React.js, TypeScript, and Tailwind CSS. I've
              also implemented and customized WordPress (Elementor) websites and
              managed Shopify/WooCommerce platforms for diverse client needs.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Beyond frontend work, I have hands-on experience supporting
              production systems on AWS, performing root cause analysis, and
              resolving user-reported issues — giving me a strong foundation in
              both building and maintaining reliable web experiences.
            </p>

            {/* Education */}
            <div className="mt-8 p-5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
                Education
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                University of Caloocan City
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
                2019 – 2023
              </p>
            </div>

            {/* Quick Stats */}
            <div
              className="grid grid-cols-3 gap-4 mt-6"
              role="list"
              aria-label="Quick stats"
            >
              {[
                { value: "2+", label: "Years Experience" },
                { value: "4+", label: "Key Projects" },
                { value: "2", label: "Companies" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  role="listitem"
                  className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                >
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="flex flex-col gap-6">
            {SKILLS.map(({ category, items }) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                  {category}
                </h3>
                <div
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label={`${category} skills`}
                >
                  {items.map((skill) => (
                    <span
                      key={skill}
                      role="listitem"
                      className="px-3 py-1.5 text-sm rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
