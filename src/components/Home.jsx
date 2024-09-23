import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import rough from "roughjs";

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rc = rough.canvas(canvas);

    rc.rectangle(90, 20, 220, 80, {
      roughness: 2,
      stroke: "purple",
      strokeWidth: 2,
    });
  }, []);

  return (
    <div
      className="relative flex flex-col justify-center px-24 py-8 h-screen"
      id="home"
    >
      <canvas
        ref={canvasRef}
        width="400"
        height="110"
        className="absolute top-1/4 left-1/4 z-0"
      ></canvas>

      <div className="TextBox relative z-8 text-6xl w-2/3 mb-6 leading-snug">
        <span className="text-purple-500"> Hi There.</span> I'm{" "}
        <span className="relative">Anshul,</span> a CS Undergrad and a Full-Stack Developer.
      </div>

      <div className="text-xl pt-2">I write code for a living.</div>
      <div className="iconf absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        <FontAwesomeIcon icon={faSortDown} size="3x" bounce />
      </div>
    </div>
  );
};

export default Home;
