import { ProjectAvatar } from "./ProjectAvatar";
import { ProjectBanner } from "./ProjectBanner";
import { Heading } from "./ui/Heading";
import { Skeleton } from "./ui/Skeleton";
import { ImpactCategories } from "./ImpactCategories";
import { Button } from "./ui/Button";
import { type Address } from "viem";
import Project from "../interfaces/Project";
import Metadata from "../interfaces/Metadata";

export default function ProjectItem({
  project,
  metadata,
  isLoading,
}: {
  project: Project;
  metadata: Metadata;
  isLoading: boolean;
}) {
  return (
    <article
      data-testid={`project-${project.id}`}
      className=" group rounded-2xl border border-gray-200 p-2 hover:border-primary-500 dark:border-gray-700 dark:hover:border-primary-500"
    >
      <div className="opacity-70 transition-opacity group-hover:opacity-100">
        <ProjectBanner profileId={project?.recipient} />
        <ProjectAvatar
          rounded="full"
          className="-mt-8 ml-4"
          profileId={project?.recipient}
        />
      </div>
      <Heading className="truncate" size="lg" as="h3">
        <Skeleton isLoading={isLoading}>{project?.name}</Skeleton>
      </Heading>
      <div className="mb-2">
        <p className="line-clamp-2 h-10 text-sm dark:text-gray-300">
          <Skeleton isLoading={isLoading} className="w-full">
            {metadata?.data?.bio}
          </Skeleton>
        </p>
      </div>
      <Skeleton isLoading={isLoading} className="w-[100px]">
        <ImpactCategories tags={metadata?.data?.impactCategory} />
      </Skeleton>
      <Button variant="primary" className="mt-6 w-full lg:w-72">
        Fund this project
      </Button>
    </article>
  );
}
