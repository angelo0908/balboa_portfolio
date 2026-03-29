import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {year} Mark Angelo Balboa. All rights reserved.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Built with React, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
