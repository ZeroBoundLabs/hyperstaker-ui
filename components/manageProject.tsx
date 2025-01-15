"use client";
import { ProjectAvatar } from "./ProjectAvatar";
import { ProjectBanner } from "./ProjectBanner";
import { Skeleton } from "./ui/Skeleton";
import Project from "../interfaces/Project";
import Metadata from "../interfaces/Metadata";
import AllocateForm from "./allocate";

export default function ManageProject({
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
      {/* data-testid={`project-${project.id}`} */}
      <article className=" group rounded-2xl border border-gray-200 p-2 hover:border-primary-500 dark:border-gray-700 dark:hover:border-primary-500">
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
                  <div className="">
                    <h5 className="mt-8">
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
                            1.2 ETH
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-gray-100">
                            Target
                          </div>
                          <div className="text-2xl font-bold text-gray-300">
                            40 ETH
                          </div>
                          {/* <div className="text-xs text-gray-200">
                            20% of prev RPGF
                          </div> */}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-200">
                            Retro split
                          </div>
                          <div className="text-2xl font-bold text-gray-300">
                            20%
                          </div>
                        </div>
                      </div>
                      <div className="clear-both"></div>
                    </div>
                    <div className="clear-both"></div>
                  </div>
                </Skeleton>
              </div>
              {/* <Skeleton isLoading={isLoading} className="w-[100px]">
                <ImpactCategories tags={metadata?.data?.impactCategory} />
              </Skeleton> */}
            </div>
            <div className="flex-1">
              <AllocateForm />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
