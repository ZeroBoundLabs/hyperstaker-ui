import { type Address } from "viem";

export default interface Project {
  id: string;
  recipient: Address;
  name: string;
  shortDescription: string;
}
