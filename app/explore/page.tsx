import React from "react";
import ProjectItem from "../../components/projectItem";
import projects from "../../projectData";
import projectMetadata from "../../metaData";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hyperstaker",
  description: "Your Insight, Everyone's Reward.",
};

export default function Page() {
  return (
    <div className="container mx-auto mt-5">
      <div className="my-5 text-2xl flex justify-center">Explore Projects</div>
      <div className="flex flex-row">
        {projects &&
          projects.map((project, key) => (
            <ProjectItem
              key={key}
              project={project}
              metadata={projectMetadata}
              isLoading={false}
              buttonText="Fund this project"
              buttonLink={`/fund/${project.slug}`}
            />
          ))}
      </div>
    </div>
  );
}
