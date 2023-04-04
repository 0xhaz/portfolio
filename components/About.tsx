import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semi">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am a self-taught developer with a passion for learning new
          technologies. I have been working as SAP Consultant for nearly 15
          years and currently expanding my knowledge in the field of blockchain
          and web development. I am fascinated by the possibilities of
          blockchain and how it aims to provide financial services without the
          need of a central authority, using automated protocols and facilitate
          fund transfers on an instant.
          <br />
          <br />
          This is one of the reasons that I have invested my time in learning a
          full stack web development and blockchain technologies. I have been
          exploring the web3 ecosystem such as NFT, DeFi & DAO&apos;s and will
          always be learning new things.
          <br />
          <br />
          I&apos;m also a graduated student of{" "}
          <span className="underline decoration-[#f7ab0a]">
            <Link
              href="https://github.com/0xhaz/chainshot-certificate/blob/main/HAZRIENNE_AHMAD_FEISAL.pdf"
              target="_blank"
            >
              Chainshot Bootcamp
            </Link>
          </span>{" "}
          (March 2022) and continously learning from front-end frameworks such
          as React, NextJS, TailwindCSS, Framer Motion and back-end frameworks
          such as NodeJS, ExpressJS, MongoDB, Solidity, Hardhat, Truffle, Web3,
          EthersJS, etc.
          <br />
          <br />
          You can see all my projects on my{" "}
          <span className="underline decoration-[#f7ab0a]">
            <Link href="#portfolio">portfolio</Link>
          </span>{" "}
          section below
        </p>
      </div>
    </motion.div>
  );
};

export default About;
