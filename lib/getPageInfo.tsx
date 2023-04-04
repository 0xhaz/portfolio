import { fetchPageInfo } from "@/utils";
import { PageInfo } from "@/typings";

export type pageInfoProps = {
  pageInfo: PageInfo;
};

const getPageInfo = async (props: pageInfoProps) => {
  const pageInfo: PageInfo = await fetchPageInfo();
  return pageInfo;
};

export default getPageInfo;
