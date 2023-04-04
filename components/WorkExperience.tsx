import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from ".";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h4 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h4>

      <div className="relative w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin  scrollbar-thumb-[#f7ab0a]/80">
        {experiences?.map(experience => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
