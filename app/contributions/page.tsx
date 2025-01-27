"use client";
import React from "react";
import ProjectItem from "../../components/projectItem";
import projects from "../../projectData";
import projectMetadata from "../../metaData";

export default function Page() {
  return (
    <div className="container mx-auto mt-5">
      <div className="my-5 text-2xl flex justify-center">My Contributions</div>
      <div className="flex flex-row">
        {projects &&
          projects.map((project, key) => (
            <ProjectItem
              key={key}
              project={project}
              metadata={projectMetadata}
              isLoading={false}
              buttonText="Manage Hypercerts"
              buttonLink={`/manage/hypercerts/${project.slug}`}
            />
          ))}
      </div>
    </div>
  );
}
