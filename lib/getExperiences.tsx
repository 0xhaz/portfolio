import { fetchExperience } from "@/utils";

import { Experience } from "@/typings";

export type experienceProps = {
  experiences: Experience[];
};

const getExeperiences = async (props: experienceProps) => {
  const experiences: Experience[] = await fetchExperience();
  return experiences;
};

export default getExeperiences;
