
import intro from "../assets/images/VideoTerminal.mp4";
import cloud1 from "../assets/images/Crowd Strike Logo.png";
import see1 from "../assets/images/cisco.png";
import mfh from "../assets/images/fortinet logo.png";
import itg from "../assets/images/malware bytes.png";
import nics from "../assets/images/Palo Alto.png";
import pitb from "../assets/images/sheild.png";
// import cloud2 from "../assets/images/cloud2.png";
// import see2 from "../assets/images/see2.png";
// import mfh2 from "../assets/images/mfh2.png";
// import itg2 from "../assets/images/itg2.png";
// import nics2 from "../assets/images/nics2.png";
// import pitb2 from "../assets/images/pitb2.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTheme } from "../context/ThemeContext";

function Intro() {
  const { theme, toggleTheme } = useTheme();


  
  return (
    <>


      <section className="text-white body-font dark:bg-black dark:text-themeGray text-themeGray bg-whiteColor  -z-10 p-0 m-0 ">
        <div className="container-sm  flex justify-between  pt-40 pb-24 md:flex-row flex-col items-center">
          {/* Left Section: Text and Button */}
          <div className="lg:flex md:w-1/2 lg:pr-0 md:pr-16 flex flex-col  mb-16 md:mb-0  text-alignment ">
            <div className="space-y-3 text-4xl lg:text-7xl  dark:text-whiteColor text-themeGray ">

              <h1 className="    mb-2 lg:mb-2 font-bold  space-y-3">
                Welcome to 
              </h1>
              <h1 className="    mb-2 lg:mb-3 font-bold  space-y-3">
                Your Cybersecurity Toolkit!
              </h1>
            </div>

            <p className="mb-8  text-gray-300 flex  text-xl lg:pr-36  text-alignment  dark:text-whiteColor text-themeGray ">
              VulnSphere is your personal hub for powerful cybersecurity tools, the latest infosec news, and premium career resources — built by Nasir Sharif.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link to="/">
                <button className="px-4 py-3 dark:hover:bg-green-700 dark:text-whiteColor dark:border dark:border-greenColor text-whiteColor  bg-greenColor hover:bg-green-600  hover:text-whiteColor  transition duration-300  rounded-lg   shadow">Premium Portal Access</button>
              </Link>
              <Link to="/" >
                <button className="px-4 py-3 bg-[#1E2536] hover:bg-gray-700 flex items-center gap-2  text-whiteColor    transition duration-300  rounded-lg   shadow">Sign In Now to Gain Access to Tools!<AiOutlineArrowRight className="rotate-45  whiteText" /></button>
              </Link>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
          <video
            className="object-cover object-center rounded shadow-lg w-full h-full"
            autoPlay
            loop
            muted
            playsInline
            src={intro}
            alt="Hero Video"
          />
        </div>
        </div>


        <div className=" text-center container-sm  dark:text-whiteColor text-themeGray ">
          <div>Ensuring Trusted Worldwide Cybersecurity Platforms </div>
         <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6  gap-12 lg:gap-20  items-center justify-between p-14 lg:p-6">
  <div>
    <img src=
     {theme === "light" ? 
               cloud2

                : 
               cloud1                
                } 
    alt="Google Cloud" className=" " />
  </div>
  <div>
    <img src={theme === "light" ? 
               see2

                : 
               see1                
                } alt="see1" className=" " />
  </div>
  <div>
    <img src={theme === "light" ? 
               mfh2

                : 
               mfh                
                } alt="mfh" className=" " />
  </div>
  <div>
    <img src={theme === "light" ? 
               itg2

                : 
               itg            
                } alt="itg" className=" " />
  </div>
  <div>
    <img src={theme === "light" ? 
               nics2

                : 
               nics                
                } alt="nics" className=" " />
  </div>
  <div>
    <img src={theme === "light" ? 
               pitb2

                : 
               pitb                
                } alt="pitb" className=" " />
  </div>
</div>

        </div>
      </section>
    </>
  );
}

export default Intro;
