import React from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

const PROJECTS: Project[] = [
  {
    title: "ACCA Concepts - Outsourcing Company Website",
    description:
      " Developed a responsive website for an outsourcing company using WordPress and Elementor. Designed the UI in Adobe XD and implemented custom styling and interactive elements using CSS and JavaScript to create a clean and user-friendly experience.",
    tags: ["WordPress", "Elementor", "JavaScript", "CSS", "Adobe XD"],
    liveUrl: "https://accaconcepts.com/",
    featured: true,
    image: "/acca.png",
    imageAlt: "ACCA Concepts company website screenshot",
  },
  {
    title: "Manila Runway Republic - Fashion Website",
    description:
      "Designed and built a fashion website using WordPress with Elementor Pro for custom layouts and styling. Implemented interactive elements and responsive design with HTML, CSS, and JavaScript to create an engaging user experience.",
    tags: ["WordPress", "Elementor Pro", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://manilarunwayrepublic.com/",
    featured: true,
    image: "/mrr.png",
    imageAlt: "Manila Runway Republic fashion website screenshot",
  },
  {
    title: "Hoda Rizk",
    description:
      "Built a responsive runway and fashion model website originally developed with WordPress (Elementor Pro) and later migrated to React and TypeScript for a fully coded, component-based architecture. The upgrade improved performance, loading speed, and visual interactions while maintaining responsive design and WCAG accessibility standards.",
    tags: ["WordPress", "TypeScript", "Tailwind CSS", "React", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://hodarizk.com/",
    image: "/hoda.png",
    imageAlt: "Hoda Rizk website screenshot",
  },
  {
    title: "POC - Virtual Assistant Website",
    description:
      "Designed and developed a Proof of Concept (POC) website for a Virtual Assistant service to demonstrate a professional online presence and service offerings. The UI was designed in Adobe XD and implemented using WordPress with custom CSS and JavaScript, focusing on responsive layout, clear service presentation, and a modern user experience.",
    tags: ["WordPress", "Elementor", "JavaScript", "CSS", "Adobe XD"],
    liveUrl: "https://pocvasite.developershideout.com/",
    image: "va.png",
    imageAlt: "POC Virtual Assistant website screenshot",
  },
  {
    title: "POC - IT Solutions Website",
    description:
      "Designed and developed a Proof of Concept (POC) website for an IT Solutions service to showcase potential business services and digital presence. The UI was designed in Adobe XD and developed using WordPress with custom CSS and JavaScript, focusing on responsive design, structured service sections, and a professional technology-focused layout.",
    tags: ["WordPress", "Elementor", "JavaScript", "CSS", "Adobe XD"],
    liveUrl: "https://poctechsite.developershideout.com/",
    image: "/tech.png",
    imageAlt: "POC IT Solutions website screenshot",
  },
  {
    title: "POC - Health and Wellness Website",
    description:
      "Designed and developed a Proof of Concept (POC) website for a Health and Wellness service to showcase wellness programs and service offerings. The UI was designed in Adobe XD and developed using WordPress with custom CSS and JavaScript, focusing on responsive design, intuitive layout, and clear presentation of health-related content.",
    tags: ["WordPress", "Elementor", "JavaScript", "CSS", "Adobe XD"],
    liveUrl: "https://pochnwsite.developershideout.com/",
    image: "/hnw.png",
    imageAlt: "POC Health and Wellness website screenshot",
  },
];

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/** Placeholder shown when no image is provided or image fails to load */
const ImagePlaceholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 text-slate-400 dark:text-slate-500"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium text-center px-4 leading-snug">
      {title}
    </span>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [imgFailed, setImgFailed] = React.useState(false);

  return (
    <article
      className={`group relative flex flex-col rounded-xl border bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 ${
        project.featured
          ? "border-blue-200 dark:border-blue-900/60"
          : "border-slate-200 dark:border-slate-800"
      }`}
    >
      {/* ── Image / Preview ── */}
      <div className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
        {project.image && !imgFailed ? (
          <>
            <img
              src={project.image}
              alt={project.imageAlt ?? `${project.title} screenshot`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgFailed(true)}
              loading="lazy"
            />
            {/* Subtle gradient fade at bottom of image */}
            <div
              className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/60 dark:from-slate-900/60 to-transparent"
              aria-hidden="true"
            />
          </>
        ) : (
          <ImagePlaceholder title={project.title} />
        )}

        {/* Featured badge — overlaid on image */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-600 text-white shadow-sm">
              Featured
            </span>
          </div>
        )}

        {/* Live link overlay on hover */}
        {project.liveUrl && project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Preview ${project.title} (opens in new tab)`}
            tabIndex={-1}
            className="absolute inset-0 flex items-center justify-center bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 text-sm font-semibold shadow-lg">
              <ExternalLinkIcon className="w-4 h-4" />
              Preview Site
            </span>
          </a>
        )}
      </div>

      {/* ── Card Body ── */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div
          className="flex flex-wrap gap-1.5 mb-4"
          role="list"
          aria-label="Technologies used"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              role="listitem"
              className="px-2 py-0.5 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto pt-3 border-t border-slate-100 dark:border-slate-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo (opens in new tab)`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:underline"
            >
              <ExternalLinkIcon className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          
        </div>
      </div>
    </article>
  );
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
          Portfolio
        </p>
        <h2
          id="projects-heading"
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
        >
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
