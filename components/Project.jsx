import React from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa';
import { SiJupyter } from 'react-icons/si';
import { IoLogoPython } from 'react-icons/io5';
const Project = () => {
  return (
    <div className=" px-6 py-10">
      <h1 className="text-gray-800 uppercase text-2xl sm:text-3xl text-center md:text-left md:text-4xl lg:text-5xl tracking-wide">
        Projects 🖥
      </h1>
      <div className="card-grid mt-8 md:mt-12">
        {/* Project One */}
        <div className="card h-48 relative">
          <div className="flex items-center  gap-2 mt-5">
            <FaNodeJs className="text-white text-2xl" />
            <h2 className=" text-xl text-white">Path - Finding Visualizer</h2>
          </div>
          <div className="my-3">
            <p className=" text-base text-white">
              Offered users, an intuitive interface to visualize the top 3
              shortest path Algo through BFS, Dijkstra’s, and A* Search
              Algorithms, structured in JavaScript.
            </p>
          </div>
          <div className=" absolute bottom-2 right-4">
            <a
              href="https://github.com/Amit-code-eng/pathfinding-visualizer-master"
              target="_blank"
              rel="noreferrer"
            >
              <BiCodeAlt className="text-2xl text-white" />
            </a>
          </div>
        </div>
        {/* Project Two */}
        <div className="card h-48 relative">
          <div className="flex items-center  gap-2 mt-5">
            <SiJupyter className="text-2xl text-white" />
            <h2 className="text-xl text-white">
              Face Mask Detection Alert System
            </h2>
          </div>
          <div className="my-3">
            <p className=" text-base text-white ">
              Utilized the haarcascade frontalface dataset to detect frontal
              faces. Incorporated a Beep alert that persists until a mask is
              worn.
            </p>
          </div>
          <div className=" absolute bottom-2 right-4">
            <a
              href="https://github.com/Amit-code-eng/Face-Mask-Detection-Alert-System"
              target="_blank"
              rel="noreferrer"
            >
              <BiCodeAlt className="text-2xl text-white" />
            </a>
          </div>
        </div>
        {/* Project Three */}
        <div className="card h-48 relative">
          <div className="flex items-center gap-2 mt-5">
            <IoLogoPython className="text-2xl text-white" />
            <h2 className=" text-xl text-white">Automated Messaging System</h2>
          </div>
          <div className="my-3">
            <p className=" text-base text-white ">
              Designed and implemented an Automated Messaging System to
              facilitate seamless communication between MongoDB and WhatsApp.
            </p>
          </div>
          <div className="absolute bottom-2 right-4">
            <a
              href="https://github.com/Amit-code-eng/Whatsapp-Automate-System"
              target="_blank"
              rel="noreferrer"
            >
              <BiCodeAlt className="text-2xl text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
