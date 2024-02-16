"use client";
import { ProjectAvatar } from "./ProjectAvatar";
import { ProjectBanner } from "./ProjectBanner";
import { Heading } from "./ui/Heading";
import { Skeleton } from "./ui/Skeleton";
import { ImpactCategories } from "./ImpactCategories";
import { Button } from "./ui/Button";
import { type Address } from "viem";
import Project from "../interfaces/Project";
import Metadata from "../interfaces/Metadata";
import Link from "next/link";
//import Fund from "./fund";
import Fund from "./send-transaction";

export default function FundProject({
  project,
  metadata,
  isLoading,
}: {
  project: Project;
  metadata: Metadata;
  isLoading: boolean;
}) {
  return (
    <div className="basis-10/12 mx-auto">
      <article
        data-testid={`project-${project.id}`}
        className=" group rounded-2xl border border-gray-200 p-2 hover:border-primary-500 dark:border-gray-700 dark:hover:border-primary-500"
      >
        <div className="opacity-70 transition-opacity group-hover:opacity-100">
          <ProjectBanner
            profileId={project?.recipient}
            url={project?.bannerUrl}
          />
          <ProjectAvatar
            rounded="full"
            className="-mt-8 ml-4"
            address={project?.recipient}
            url={project?.avatarUrl}
          />
        </div>
        <div className="px-4">
          <div className="flex">
            <div className="flex-1">
              <Heading className="truncate" size="lg" as="h3">
                <Skeleton isLoading={isLoading}>{project?.name}</Skeleton>
              </Heading>
              <div className="mb-2">
                <p className="line-clamp-2 h-10 text-sm dark:text-gray-300">
                  <Skeleton isLoading={isLoading} className="w-full">
                    {project?.longDescription || project?.shortDescription}
                  </Skeleton>
                </p>
              </div>
              <Skeleton isLoading={isLoading} className="w-[100px]">
                <ImpactCategories tags={metadata?.data?.impactCategory} />
              </Skeleton>
            </div>
            <div className="flex-1">
              {/* <h3>Fund this project</h3> */}
              <Fund project={project} />
              {/* <Fund project={project} /> */}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
