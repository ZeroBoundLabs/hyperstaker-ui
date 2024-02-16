import { type ComponentProps } from "react";
import { type Address } from "viem";

import { Avatar } from "./ui/Avatar";

// TODO: ProfileMetadata
export function ProjectAvatar(
  props: { address: Address | string; url: string } & ComponentProps<
    typeof Avatar
  >
) {
  // const profile = useProfileWithMetadata(props.profileId);
  // const { profileImageUrl } = profile.data ?? {};

  return <Avatar {...props} src={props.url} />;
}
