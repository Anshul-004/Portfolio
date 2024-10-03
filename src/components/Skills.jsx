import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faJava,
  faPython,
  faGitAlt,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faC } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-8" id="skills">
      <div className="Title text-3xl md:text-4xl lg:text-5xl lg:mt-4 text-center pb-8">
        I am proficient at
      </div>
      <div className="flex justify-center">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
          <li>
            <FontAwesomeIcon icon={faHtml5} size="5x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3Alt} size="5x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faJava} size="5x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faJs} size="5x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faPython} size="5x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faGitAlt} size="5x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faReact} size="5x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faC} size="5x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faDatabase} size="5x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faNodeJs} size="5x" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
