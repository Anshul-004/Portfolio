import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faJava,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="px-24 py-8" id="skills">
      <div className="Title text-5xl text-center pb-8">What I fiddle with</div>
      <div className="flex justify-center gap-10">
        <FontAwesomeIcon icon={faHtml5} size="5x" />
        <FontAwesomeIcon icon={faCss3Alt} size="5x" />
        <FontAwesomeIcon icon={faJs} size="5x" />
        <FontAwesomeIcon icon={faJava} size="5x" />
        <FontAwesomeIcon icon={faPython} size="5x" />
      </div>
      <div className="EndContainer pt-8 flex justify-center">
        <FontAwesomeIcon icon={faStarOfLife} fade size="xl" />
      </div>
    </div>
  );
};

export default Skills;
