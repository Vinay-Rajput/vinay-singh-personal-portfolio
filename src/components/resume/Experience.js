import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ROR Developer"
            subTitle="Yuvasoft Solutions (2022 - Present)"
            result="Indore"
            des="Currently employed as a Ruby on Rails (ROR) Developer at Yuvasoft Solutions, leveraging expertise in web development to contribute to dynamic projects. Engaged in crafting efficient and scalable solutions while collaborating with cross-functional teams to deliver high-quality software products."
          />
          <ResumeCard
            title="Junior Software Engineer"
            subTitle="Zehntech Technologies (2021 - 2022)"
            result="Indore"
            des="Served as a Junior Software Engineer at Zehntech Technologies from 2021 to 2022, gaining hands-on experience in software development methodologies and tools. Contributed to the development and enhancement of software solutions, demonstrating adaptability and a keen eye for detail."
          />
          {/* <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
