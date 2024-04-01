import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

function Home() {
  return (
    <div className="flex relative z-10 justify-center px-6 sm:px-10 sm:py-10 pt-5">
      <div className="flex items-center gap-6 sm:gap-10 md:flex-row flex-col">
        <div
          className="flex flex-col justify-start items-center"
          style={{ flex: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wider font-semibold my-6 text-center text-gray-900">
            Hi, I&#x27;m Amit
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-500 tracking-wide mx-auto text-gray-500 text-center">
            Developer 🧑‍💻 | Analytics 🤖 | DSA 🚀 | IIT BHU 🧑🏼‍🎓
          </h2>
          <div className="flex mt-8 gap-5">
            <a
              href="https://wa.me/+919022217954"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home-icon">
                <FaWhatsapp />
              </div>
            </a>
            <a
              href="https://github.com/Amit-code-eng"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home-icon">
                <AiFillGithub />
              </div>
            </a>
            <a
              href="mailto: amitdilipjaiswal191220@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home-icon">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/amit-jaiswal-b062811a3"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home-icon">
                <FaLinkedinIn />
              </div>
            </a>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="https://drive.google.com/file/d/1KPtHG5DhykhEKBUUb37fLsMVWi37_BxU/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-sm p-4 font-semibold rounded-md hover:translate-y-1 scale-90 text-white tracking-wider hover:bg-white hover:text-custom-black transition duration-500 border border-custom-black p-2 bg-custom-black">
                DOWNLOAD RESUME
              </button>
            </a>
          </div>
        </div>
        <div style={{ flex: 0.6 }}>
          <img src="home_image.svg" alt="home-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
