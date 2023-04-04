import { fetchProjects } from "@/utils";
import { Project } from "@/typings";

export type projectProps = {
  projects: Project[];
};

const getProjects = async (props: projectProps) => {
  const projects: Project[] = await fetchProjects();
  return projects;
};

export default getProjects;
