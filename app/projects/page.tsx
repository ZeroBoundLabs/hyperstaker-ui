import React from "react";
import ProjectItem from "../../components/projectItem";
import Project from "../../interfaces/Project";
import Metadata from "../../interfaces/Metadata";

const project: Project = {
  id: "1",
  recipient: "0x123",
  name: "HyperStaker",
  shortDescription: "A project to predict the next big thing",
  avatarUrl: "/img/hs-logo-small.jpg",
  bannerUrl: "/img/hs-banner.jpg",
};

const project2: Project = {
  id: "2",
  recipient: "0x123",
  name: "Funding the commons",
  shortDescription:
    "We envision a world where the incentives that govern human coordination at scale push our species to develop an economy that prioritizes public goods above all else.",
  avatarUrl: "/img/ftc-square.jpg",
  bannerUrl: "/img/ftc-banner.jpg",
};
const project3: Project = {
  id: "3",
  recipient: "0x123",
  name: "FUX",
  shortDescription:
    "Gain perspective on how to allocate your most valuable asset: your attention.",
  avatarUrl: "",
  bannerUrl: "",
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
