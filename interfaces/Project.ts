import { type Address } from "viem";

export default interface Project {
  id: string;
  recipient: Address | string;
  name: string;
  shortDescription: string;
  avatarUrl: string;
  bannerUrl: string;
  slug: string;
}
