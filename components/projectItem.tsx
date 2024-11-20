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
import { DooglyDonateButton } from "@doogly/doogly-donate-component";

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
    <div className="basis-10/12 mx-2">
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
          <Heading className="truncate" size="lg" as="h3">
            <Skeleton isLoading={isLoading}>{project?.name}</Skeleton>
          </Heading>
          <div className="mb-2">
            <p className="line-clamp-2 h-10 text-sm dark:text-gray-300">
              <Skeleton isLoading={isLoading} className="w-full">
                {project?.shortDescription}
              </Skeleton>
            </p>
          </div>
          <Skeleton isLoading={isLoading} className="w-[100px]">
            <ImpactCategories tags={metadata?.data?.impactCategory} />
          </Skeleton>
        </div>

        {project.id == "4" ? (
          <DooglyDonateButton
            buttonText="Donate Now"
            modalTitle="Save NFT.Storage"
            config={{
              destinationChain: "optimism",
              destinationAddress: "0x8a4c14d50c43363a28647188534db7004112091c",
              splitsAddress: "0xA968ded9904E0fcB878fa8A0621227BC676e58Fe", // This is the receiver's address
              hypercertFractionId:
                "18669932343484209736381511211351394689744896",
              poolId: 0,
            }}
            buttonClassName="block mt-6 w-full px-4 py-3 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
          />
        ) : (
          <Link
            href={`/fund/${project.slug}`}
            className="block mt-6 w-full px-4 py-3 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
          >
            Fund this project
          </Link>
        )}
      </article>
    </div>
  );
}
