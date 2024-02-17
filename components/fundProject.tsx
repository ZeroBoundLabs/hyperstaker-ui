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
import Fund from "./fund";

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
            <div className="p-2 mr-16  flex-1">
              <h3>{project?.name}</h3>
              <div className="mb-2">
                <p className="h-10 text-sm dark:text-gray-300">
                  <Skeleton isLoading={isLoading} className="w-full">
                    {project?.longDescription || project?.longDescription}
                  </Skeleton>
                </p>
              </div>
              <div className="mb-24">
                <Skeleton isLoading={isLoading} className="w-full">
                  <h4>About this round</h4>
                  <p>
                    This is a <Link href="/">fixed raise round</Link>, which
                    means that the prospective funding round will be open until
                    the project raises it&apos;s funding goal.
                  </p>
                  <div className="">
                    <h5>
                      Funds raised <span className="float-right">40%</span>
                    </h5>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        style={{ width: "45%" }}
                        className="mb-4 bg-blue-600 h-2.5 rounded-full"
                      ></div>
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-sm font-medium text-gray-100">
                            Past Funding
                          </div>
                          <div className="text-2xl font-bold text-gray-200">
                            $0
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-gray-100">
                            Target
                          </div>
                          <div className="text-2xl font-bold text-gray-300">
                            $100k
                          </div>
                          <div className="text-xs text-gray-200">
                            20% of prev RPGF
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-200">
                            RPGF4 Split
                          </div>
                          <div className="text-2xl font-bold text-gray-300">
                            10.25%
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <button className="bg-red-500 text-white w-full py-3 rounded-lg font-medium hover:bg-red-600">
                        DONATE
                      </button> */}
                  </div>
                </Skeleton>
              </div>
              {/* <Skeleton isLoading={isLoading} className="w-[100px]">
                <ImpactCategories tags={metadata?.data?.impactCategory} />
              </Skeleton> */}
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
