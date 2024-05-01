import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B-Tech in Computer Science"
            subTitle="SD Bansal College Of Engineering, Indore (2018 - 2022)"
            result="8/10"
            des="Bachelor of Technology in Computer Science from SD Bansal College of Engineering, Indore, with a focus on innovative problem-solving and practical application of computer science principles. Graduated in 2022 with a strong academic record and a passion for technology."
          />
          <ResumeCard
            title="Higher Secondary Education - 12th"
            subTitle="Shree Vaishanav Vidhya Mandir, Khargone (2017 - 2018)"
            result="7.5/10"
            des="Completed Higher Secondary Education (12th Grade) from Shree Vaishanav Vidhya Mandir, Khargone in 2018, demonstrating academic excellence and dedication to learning. Established a solid foundation for further academic pursuits through rigorous coursework and commitment to academic success."
          />
          <ResumeCard
            title="High School Education - 10th"
            subTitle="Gyandeep Shiksha Niketan, Khargone (2015 - 2016)"
            result="8/10"
            des="Attained High School Education (10th Grade) from Gyandeep Shiksha Niketan, Khargone in 2016, showcasing strong academic performance and dedication to educational excellence. Developed fundamental skills and knowledge essential for academic and personal growth."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education