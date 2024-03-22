import React from 'react';

const Education = () => {
  return (
    <div className=" px-6 py-10">
      <h1 className="text-gray-800 uppercase text-2xl sm:text-3xl text-center md:text-left md:text-4xl lg:text-5xl tracking-wide">
        EDUCATION 👨‍🎓
      </h1>
      <div className="card-grid mt-8 md:mt-12">
        <div className="h-48 card">
          <div className="gap-2 mt-5">
            <h2 className="text-xl text-center text-white">
              Indian Institute of Technology (IIT BHU) Varanasi
            </h2>
          </div>
          <div className="my-3">
            <p className="text-base text-center text-white mt-1">
              Bachelor of Technology (B. Tech)
            </p>
            <p className="text-base text-center text-white mt-1">2019 - 2023</p>
          </div>
        </div>
        <div className="h-48 card">
          <div className="gap-2 mt-5">
            <h2 className="text-xl text-center text-white ">
              Shivaji Science College
            </h2>
          </div>
          <div className="my-3">
            <p className="text-base text-center text-white mt-1">
              Maharashtra State Board (HSC)
            </p>
            <p className="text-base text-center text-white mt-1">2018 - 2019</p>
          </div>
        </div>
        <div className="h-48 card">
          <div className="gap-2 mt-5">
            <h2 className="text-xl text-center text-white">
              Shreyas Convent School
            </h2>
          </div>
          <div className="my-3">
            <p className="text-base text-center text-white mt-1">
              Maharashtra State Board (SSC)
            </p>
            <p className="text-base text-center text-white mt-1">2016 - 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
