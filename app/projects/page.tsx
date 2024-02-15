import React from "react";
import ProjectItem from "../../components/projectItem";
import Project from "../../interfaces/Project";
import Metadata from "../../interfaces/Metadata";

const project: Project = {
  id: "1",
  recipient: "0x123",
  name: "HyperStaker",
  shortDescription: "A project to predict the next big thing",
};
const project2: Project = {
  id: "2",
  recipient: "0x123",
  name: "FUX",
  shortDescription:
    "Gain perspective on how to allocate your most valuable asset: your attention.",
};
const project3: Project = {
  id: "3",
  recipient: "0x123",
  name: "IRSF",
  shortDescription:
    "A decentralized network of refugees mutually educating and financially supporting each other",
};

const metadata: Metadata = {
  data: {
    bio: "A project to predict the next big thing",
    impactCategory: ["Technology", "Finance"],
  },
};

export default function Page() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="basis-1/2 mx-2">
          <ProjectItem
            project={project}
            metadata={metadata}
            isLoading={false}
          />
        </div>
        <div className="basis-1/2 mx-2">
          <ProjectItem
            project={project2}
            metadata={metadata}
            isLoading={false}
          />
        </div>
        <div className="basis-1/2 mx-2">
          <ProjectItem
            project={project3}
            metadata={metadata}
            isLoading={false}
          />
        </div>
      </div>
    </div>
  );
}
