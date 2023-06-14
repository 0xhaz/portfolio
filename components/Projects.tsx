import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { BeakerIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt={project?.title}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl" key={i}>
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {i + 1} of {projects.length}
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies?.map(technology => (
                  <Image
                    className="rounded-full gap-2  "
                    key={technology._id}
                    src={urlFor(technology?.image)?.url()}
                    alt={technology?.title}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
            <div className="space-x-5 flex justify-center items-center flex-col md:flex-row">
              <SocialIcon
                url={project?.githubLink}
                fgColor="gray"
                bgColor="transparent"
                style={{ height: 100, width: 100 }}
              />
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-[#f7ab0a] bg-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Link href={project?.linkToBuild}>
                  <button className="relative px-7 py-4 bg-black/75 rounded-lg flex items-center leading-none divide-gray-600 space-x-5 ">
                    <BeakerIcon className="h-6 w-6 text-sm text-pink-600 -rotate-6 group-hover:text-[#f7ab0a]" />
                    <span className="group-hover:text-[#f7ab0a] text-indigo-300">
                      Live Demo
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
