import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Genius Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <a href="https://r3-f-next-js-starter-package-ayush-lamas-projects.vercel.app/">
  <ProjectCard
    src="/3d.png"
    title="React 3 Next.js Portfolio"
    description="Starterpack and workshop in NEXT.JS"
  />
</a>
<a href="https://goinggenius.com.np/">
  <ProjectCard
    src="/gg.png"
    title="Going Genius Company"
    description="Leader at Going Genius Group of Company Pvt. Ltd."
  />
</a>
<a href="https://ggrelativity.xyz/">
  <ProjectCard
    src="/relativity.png"
    title="GG Relativity"
    description="GG Relativity Business ERP for any Business"
  />
</a>

      </div>
    </div>
  );
};

export default Projects;
