import { fetchSocials } from "@/utils";
import { Social } from "@/typings";

export type socialProps = {
  socials: Social[];
};

const getSocials = async (props: socialProps) => {
  const socials: Social[] = await fetchSocials();
  return socials;
};

export default getSocials;
