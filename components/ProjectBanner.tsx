import { type ComponentProps } from "react";
import { type Address } from "viem";

import { Banner } from "./ui/Banner";
//import { useProfileWithMetadata } from "~/hooks/useProfile";

export function ProjectBanner(
  props: { profileId: Address } & ComponentProps<typeof Banner>
) {
  //const profile = useProfileWithMetadata(props.profileId);
  const profile: { data: { profileImageUrl: string; bannerImageUrl: string } } =
    {
      data: {
        profileImageUrl: "img/hs-logo-small",
        bannerImageUrl: "img/hs-logo-small",
      },
    };
  const { profileImageUrl, bannerImageUrl } = profile.data ?? {};

  return (
    <div className="overflow-hidden rounded-3xl">
      <Banner {...props} src={bannerImageUrl} fallbackSrc={profileImageUrl} />
    </div>
  );
}
