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
            Hey there! 👋 I'm Amit Jaiswal, a dynamic Software Engineer hailing
            from the prestigious halls of IIT BHU Varanasi, where I graduated
            with flying colors, boasting a CPI of 8.68. With a year of rich
            industry experience under my belt, I bring a blend of technical
            prowess and innovative thinking to the table. My journey through the
            tech landscape has been nothing short of exhilarating. From
            mastering the intricacies of the MERN Stack to delving deep into the
            realms of Python and Machine Learning (think pandas, openpyxl, and
            beyond), I thrive on the diversity of technologies and domains I've
            had the privilege to explore. Shell Scripting? You bet! OpenAI API?
            Count me in! But that's not all – I'm not just confined to the
            digital realm. With a solid grasp of Linux and AWS, I effortlessly
            navigate the cloud, adeptly deploying and managing applications to
            ensure seamless performance and scalability.
          </p>
          <p className="text-base md:text-lg  mt-6 md:mt-10 text-gray-500 text-center md:text-left">
            Moreover, I am an avid competitor in the realm of competitive
            programming, with a keen interest in platforms like LeetCode,
            Codeforces, and GeeksforGeeks. I relish the challenges presented by
            algorithmic problem-solving and consistently strive to sharpen my
            skills in this domain. Beyond the lines of code, I'm a fervent
            sports enthusiast, finding joy and inspiration in the competitive
            spirit that drives both technology and athletics alike. Confidence
            is my middle name, backed by a rock-solid foundation of skills and
            experiences that fuel my passion for innovation. Ready to embark on
            the next exciting chapter of my journey, I'm eager to collaborate,
            create, and conquer new horizons. Let's build something remarkable
            together! 🚀
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
