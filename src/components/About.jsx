import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <div
      className="px-24 py-8 h-screen flex justify-center flex-col"
      id="about"
    >
      <div className="Title text-5xl text-center pb-10">About Me </div>
      <div className="container flex">
        <div className="LHS w-1/4 text-5xl leading-relaxed">
          I'm Anshul Singh. Nice to meet you.
          <div className="text-xl pt-4">
            Email : <p>anshulsingh024@yahoo.com</p>
          </div>
          <div className="text-xl pt-4">
            Socials :{" "}
            <div className="pt-2">
            <a href="https://github.com/Anshul-004" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="xl" /> &nbsp;{" "}
            </a>
            <a href="https://www.linkedin.com/in/anshulsingh-/" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} size="xl" /> &nbsp;{" "}
            </a>
            <a href="https://x.com/Anshul_004_" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} size="xl" />
            </a>
            </div>
          </div>
        </div>

        <div className="RHS w-5/6 text-xl px-2">
          <p className=" pb-4">
          I am a computer engineering student with a strong passion for competitive programming and problem-solving. Proficient in languages such as C, C++, Python, and Java, I have a deep interest in backend development with hands-on experience in MySQL and MongoDB. I also have experience in full-stack web development using frameworks like React, Node.js, Express, and Next.js.
          </p>
          <p className=" pb-4">
          I am actively involved in open-source contributions and strongly believe in the value of collaboration. My expertise in Git, Linux, and growing interest in networking further fuels my technical curiosity.
          </p>
          <p className=" pb-8">
          While I enjoy front-end technologies, my primary focus is on backend systems, where I am driven to design efficient databases and server-side architectures. I'm always seeking new opportunities to expand my skills in backend development and networking technologies.
          </p>
          <button className=" bg-purple-400 text-lg p-2 rounded-md hover:bg-white hover:text-purple-400 border-purple-400 border-2">
            <a href="/resume_main.pdf" target="_blank">
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
