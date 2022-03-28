import React from "react";
import { AiFillProject } from "react-icons/ai";
const Project = () => {
  return (
    <div className=" px-6 py-10">
      <h1 className="text-gray-800 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
        Projects 🖥
      </h1>
      <div className="project-grid mt-12">
        {/* Project One */}
        <div className="card">
          <div className="flex items-center  gap-2 mt-5">
            <AiFillProject />

            <h2 className=" text-xl text-gray-700">Partdekho</h2>
          </div>
          <div className="my-3">
            <p className=" text-base text-gray-500">
              Developed partdekho.com, an ecommerce web application created
              using ReactJS and NodeJS.
            </p>
          </div>
        </div>
        {/* Project Two */}
        <div className="card">
          <div className="flex items-center  gap-2 mt-5">
            <AiFillProject />
            <h2 className="text-xl text-gray-700">Shortener Url</h2>
          </div>
          <div className="my-3">
            <p className=" text-base text-gray-500">
              It working is by taking a long URL to create a short URL. And
              anyone.
            </p>
          </div>
        </div>
        {/* Project Three */}
        <div className="card">
          <div className="flex items-center gap-2 mt-5">
            <AiFillProject />
            <h2 className=" text-xl text-gray-700">Mushin Aqua</h2>
          </div>
          <div className="my-3">
            <p className=" text-base text-gray-500">
              Developed auditing software using MERN stack, to check Honda
              compliance norms under 6 months.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
