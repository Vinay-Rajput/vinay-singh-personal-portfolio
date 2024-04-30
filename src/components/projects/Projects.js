import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PETSTABLISHED"
          des="Petstablished is a software to Animal Welfare Organizations. 
          AWOs can track information for all of their pets, adopters, fosters, donations, and staff."
          src={projectOne}
        />
        <ProjectsCard
          title="RISKCOVRY"
          des="Riskcovry is an Insurtech or a Digital Insurance Company 
          based out of India that enables insurance distribution for enterprise customers."
          src={projectTwo}
        />
        <ProjectsCard
          title="DISPATCH TRACK"
          des="DispatchTrack is the global leader in last mile 
          delivery solutions, helping distribution companies around the world power successful deliveries 1 million times a day."
          src={projectThree}
        />
        <ProjectsCard
          title="PAYVMNT"
          des="Real-time route optimization software crowdsourced from drivers to provide drivers a better delivery experience. Directed to your specific drop location."
          src={projectFour}
        />
        <ProjectsCard
          title="TUNEFRUIT"
          des="Tunefruit is your hip, cool friend that always knows where to find the 
          freshest production music for your explainer video. License Music. Simply."
          src={projectFive}
        />
        <ProjectsCard
          title="PRINT SEC"
          des="PrintSEC is a SaaS-based encrypted printing service that offers a secure and simple solution, 
          It does not require any additional hardware and software infrastructure"
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects