import { fetchSkills } from "@/utils/fetchSkills";
import { Skill } from "@/typings";

export type skillProps = {
  skills: Skill[];
};

const getSkills = async (props: skillProps) => {
  const skills: Skill[] = await fetchSkills();
  return skills;
};

export default getSkills;
