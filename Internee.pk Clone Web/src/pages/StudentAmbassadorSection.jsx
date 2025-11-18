import React from 'react';
import building from "../assets/images/building.avif";
import { BsJournal } from "react-icons/bs";
import { BsTrophy } from "react-icons/bs";
import { BsCheckSquare } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa6";
import { BsChevronExpand } from "react-icons/bs";


function StudentAmbassadorSection() {
  return (
    <>
    <div className="dark:bg-blackColor bg-whiteColor mt-20 md:mt-20 lg:mt-24 xl:mt-20 pt-28 pb-20 text-white min-h-screen relative "
    style={{
        backgroundImage:
        "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}>
                 <div className="absolute inset-0 dark:bg-blackColor bg-whiteColor opacity-80 z-0"></div>
                 <div className="container-sm">

      <div className="max-w-7xl mx-auto px-6 py-12 z-10 relative">
        {/* Hero Section */}
        <div className="mb-16 dark:text-whiteColor text-blackColor">
          <h1 className="text-6xl sm:text-5xl font-bold leading-tight">
            Internee.pk <br />
            <span className="">Student Ambassadors</span>
          </h1>
          <p className="text-sm mt-4 max-w-2xl">
            Join our global community of students who are passionate about building AI-driven solutions with Microsoft technology.
            Accelerate innovation and grow the skills you need to have greater impact in the projects and communities that matter to you.
          </p>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition-all">
            Get Started →
          </button>
        </div>

        {/* Highlight Card */}
        <div className="dark:bg-darkgray dark:text-whiteColor text-blackColor bg-gray-100 mx-auto p-6 rounded-lg flex flex-col justify-center sm:flex-row gap-6 items-center">
          <img
            src={building}
            alt="Building"
            className="rounded-xl w-full h-96 sm:w-60 object-cover"
            />
          <div className=" p-4 rounded-md dark:bg-darkgray bg-whiteColor w-fit">
            <h2 className="text-7xl font-bold">Unlock Your
                <br></br> Potential</h2>
            <p className="text-lg mt-2">
              Discover new opportunities and enhance your skills.<br />
              Gain real-world experience with hands-on projects.<br />
              Connect with a network of like-minded individuals.
            </p>
          </div>
        </div>
              </div>
            </div>
            </div>
            <div className="container-sm">

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {[
            { title: 'Get started', desc: 'Become a Student Ambassador', icon: <BsJournal /> },
            { title: 'Community', desc: 'Explore Student Ambassador profiles', icon: <AiOutlineUsergroupAdd className="greenText text-6xl  rounded-xl " /> },
            { title: 'Startup Competition', desc: 'Student competition for AI startups', icon: <BsTrophy /> },
            { title: 'Founders Hub', desc: 'A platform for entrepreneurs at any stage', icon: <BsCheckSquare /> },
        ].map((item, index) => (
            <div key={index} className="flex gap-3 items-center dark:bg-darkgray  dark:text-whiteColor bg-gray-100 text-blackColor shadow  rounded-lg  hover:scale-105 hover:transition-all">
              <div className="greenText bg-green-500/10 backdrop-blur-sm text-4xl w-2/6 h-full flex items-center justify-center  rounded-xl">
              <div className='p-3 '>

              {item.icon}
              </div>
              </div>
              <div className="py-4 pr-4">

              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Section */}
        <div className="my-16">
          <h2 className="text-xl font-semibold mb-4 dark:text-whiteColor text-blackColor">Why you should join</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
                {
                    title: 'Learn and Grow',
                    desc: 'Access exclusive learning resources and certifications to build your technical skills.',
                    icon: <FaGraduationCap />,
                },
                {
                    title: 'Build Community',
                desc: 'Connect with fellow students and mentors from around the world.',
                icon: <AiOutlineUsergroupAdd />,
            },
            {
                title: 'Create Solutions',
                desc: 'Work on real projects using cutting-edge Internee.pk technologies.',
                icon: <BsChevronExpand className='rotate-90' />,
            },
        ].map((item, idx) => (
              <div key={idx} className="dark:bg-darkgray  dark:text-whiteColor bg-gray-100 text-blackColor shadow p-10 rounded-lg hover:scale-105 hover:transition-all">
                <div className="text-greenColor text-5xl mb-2">{item.icon}</div>
                <h4 className="font-semibold mb-1 text-lg">{item.title}</h4>
                <p className="text-sm ">{item.desc}</p>
              </div>
            ))}
            </div>
      </div>
    </div>
                </>
  );
};

export default StudentAmbassadorSection;
