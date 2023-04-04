import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5 bg-[#333333]">
        <Link href="/" className="text-white flex items-center">
          <ArrowUturnLeftIcon className="w-4 h-4 mr-2 text-white" />
          Go to Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
