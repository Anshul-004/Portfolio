import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center px-24 py-8 h-screen" id="home">
      <div className="TextBox text-6xl w-2/3 mb-6 leading-snug">
        <span className="text-purple-500"> Hi There.</span> I'm <span>Anshul,</span> a CS Undergrad and a Full-Stack Developer.
      </div>

      <div className="text-xl pt-2">I write code for a living.</div>
      <div className="iconf absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        <FontAwesomeIcon icon={faSortDown} size="3x" bounce />
      </div>
    </div>
  );
};

export default Home;