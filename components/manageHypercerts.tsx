"use client";
import { ProjectAvatar } from "./ProjectAvatar";
import { ProjectBanner } from "./ProjectBanner";
import { Skeleton } from "./ui/Skeleton";
import { Button } from "./ui/Button";
import Project from "../interfaces/Project";
import Metadata from "../interfaces/Metadata";

export default function ManageHypercert({
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
              <div className="px-4 mt-8">
                <div className="grid grid-cols-1 gap-6">
                  {/* Staked Hypercerts Section */}
                  <section className="border rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-4">
                      My Staked Hypercerts
                    </h2>
                    <div className="space-y-4">
                      {/* Example staked item - Replace with actual data mapping */}
                      <div className="flex items-center justify-between p-3 bg-gray-600 dark:bg-gray-800 rounded">
                        <div>
                          <p className="font-medium">Fraction ID: #123</p>
                          <p className="text-sm text-gray-200">
                            Yield: 0.5 ETH
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          onClick={() => console.log("Unstake")}
                        >
                          Unstake
                        </Button>
                      </div>
                    </div>
                  </section>

                  {/* Unstaked Hypercerts Section */}
                  <section className="border rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-4">
                      My Unstaked Hypercerts
                    </h2>
                    <div className="space-y-4">
                      {/* Example unstaked item - Replace with actual data mapping */}
                      <div className="flex items-center justify-between p-3 bg-gray-600 dark:bg-gray-800 rounded">
                        <div>
                          <p className="font-medium">Fraction ID: #456</p>
                        </div>
                        <Button
                          variant="outline"
                          onClick={() => console.log("Stake")}
                        >
                          Stake
                        </Button>
                      </div>
                    </div>
                  </section>

                  {/* Retirable Hypercerts Section */}
                  <section className="border rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-4">
                      My Retirable Hypercerts
                    </h2>
                    <div className="space-y-4">
                      {/* Example retirable item - Replace with actual data mapping */}
                      <div className="flex items-center justify-between p-3 bg-gray-600 dark:bg-gray-800 rounded">
                        <div>
                          <p className="font-medium">Fraction ID: #789</p>
                        </div>
                        <Button
                          variant="outline"
                          onClick={() => console.log("Retire")}
                        >
                          Retire
                        </Button>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
