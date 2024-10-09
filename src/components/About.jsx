import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div id="about" className="px-6 md:px-12 lg:px-24 lg:h-screen lg:justify-center lg:flex lg:flex-col py-8">
      <div className="Title text-3xl md:text-4xl lg:text-5xl lg:mt-4 text-center pb-8">About Me</div>
      <div className="container flex flex-col lg:flex-row">
        <div className="LHS mr-2 w-full lg:w-1/3 text-3xl md:text-4xl lg:text-5xl leading-relaxed mb-6 lg:mb-0">
          I'm <span className="underline decoration-purple-400 decoration-wavy">Anshul Singh</span>. Nice to meet you.
          <div className="text-lg md:text-xl pt-4 lg:mt-8">
            Email: <p>anshulsingh024@yahoo.com</p>
          </div>
          <div className="text-lg md:text-xl pt-4">
            Socials:
            <div className="pt-2 flex space-x-4">
              <a href="https://github.com/Anshul-004" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
              <a href="https://www.linkedin.com/in/anshulsingh-/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
              </a>
              <a href="https://x.com/Anshul_004_" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} size="xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="RHS ml-1 w-full lg:w-3/4 text-lg md:text-xl leading-relaxed">
          <p className="pb-4">
            I am a computer engineering student with a strong passion for competitive programming and problem-solving. Proficient in languages such as C, C++, Python, and Java, I have a deep interest in backend development with hands-on experience in MySQL and MongoDB. I also have experience in full-stack web development using frameworks like React, Node.js, Express, and Next.js.
          </p>
          <p className="pb-4">
            I am actively involved in open-source contributions and strongly believe in the value of collaboration. My expertise in Git, Linux, and growing interest in networking further fuels my technical curiosity.
          </p>
          <p className="pb-8">
            While I enjoy front-end technologies, my primary focus is on backend systems, where I am driven to design efficient databases and server-side architectures. I'm always seeking new opportunities to expand my skills in backend development and networking technologies.
          </p>
          <button className="bg-purple-400 text-lg p-2 rounded-md hover:bg-white hover:text-purple-400 border-purple-400 border-2 text-white">
            <a href="/resume_main_m1.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;