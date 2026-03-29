import React from 'react';
import { imageObject } from '../data/skill_imgae';
import SkillComponent from './SkillComponent';
function About() {
  return (
    <section className="py-8 px-6 sm:px-10">
      <div className="flex mt-10 justify-center items-center gap-4 md:gap-15 lg:gap-20 flex-col-reverse md:flex-row md:items-start">
        <img src="aboutme.svg" alt="aboutme" className="h-96" />
        <div className="w-full md:w-6/12 md:flex-row">
          <h2 className="text-2xl uppercase sm:text-3xl text-center md:text-left md:text-4xl lg:text-5xl tracking-wide">
            About Me 🧑‍💻
          </h2>
          <p className="text-base md:text-lg  mt-6 md:mt-10 text-gray-500 text-center md:text-left">
            Hey there! 👋 I'm Amit Jaiswal, an engineer with a cross-disciplinary foundation spanning civil engineering, electronics, and software systems, with a strong inclination toward low-level computing and system design.
            I graduated from IIT (BHU) with a B.Tech in Civil Engineering (CPI: 8.68), and later secured AIR 108 in GATE 2026 (Electronics) , reflecting a deliberate transition into core electronics and computing systems.
            Professionally, I have worked as a full-stack developer where I built production-grade systems involving automation pipelines, cloud-integrated architectures (AWS S3, EC2), and data processing workflows. My work includes designing CI/CD pipelines, backend middleware for secure data transfer, and high-performance data automation tools (achieving 100× improvements in processing efficiency)
          </p>
          <p className="text-base md:text-lg  mt-6 md:mt-10 text-gray-500 text-center md:text-left">
          Beyond conventional web development, my core interest lies in system-level engineering — particularly:

          * Linux-based environments and shell-driven workflows.
          * Android internals, rooting, and AOSP ecosystem.
          * Interaction between software and hardware (GPIO, PWM, embedded control).
          * Algorithmic problem solving and performance-oriented design.
          </p>
          <p className="text-base md:text-lg  mt-6 md:mt-10 text-gray-500 text-center md:text-left">I approach engineering as a stack-spanning problem, from hardware interaction up to distributed application layers, with a focus on efficiency, control, and system transparency.
          Currently, I am focused on advancing toward VLSI, embedded systems, and low-level architecture domains, while continuing to build and experiment across the software-hardware boundary.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mt-6 justify-center">
            {imageObject.map((item) => (
              <SkillComponent key={item.id} {...{ item }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
