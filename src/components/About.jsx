import React from "react";

const About = () => {
  return (
    <div
      className="px-24 py-8 h-screen flex justify-center flex-col"
      id="about"
    >
      <div className="Title text-5xl text-center pb-8">About Me </div>
      <div className="container flex">
        <div className="LHS w-1/4 text-5xl leading-relaxed">
          I'm Anshul Singh. Nice to meet you.
          <div className="text-xl pt-4">
            Email : <p>anshulsingh024@yahoo.com</p>
          </div>
          <div className="text-xl pt-4">
            Socials : <p>Github LinkedIn Email</p>
          </div>
        </div>

        <div className="RHS w-5/6 text-xl px-2">
          <p className=" pb-4">
            I'm a Frontend Developer who enjoys solving complex problems,
            creating impactful and user-centered experiences across multiple
            platforms that are informed by research and data.{" "}
          </p>
          <p className=" pb-4">
            I'm probably not the typical designer positioned behind an
            Illustrator artboard adjusting pixels, but I design. Immersed in
            stylesheets tweaking font sizes and contemplating layouts is where
            you'll find me. I'm committed to creating fluent user experiences
            while staying fashionable.
          </p>
          <p className=" pb-4">
            When it comes to business, first impressions matter, and good
            website design is the key to capitalizing on them. An excellent site
            is not judged solely on its looks, but on its functionality and
            usability as well. My experience as a programmer allows me to come
            up with intelligent solutions to technical challenges, while at the
            same time designing sleek and visually appealing websites. Aside
            from having extensive knowledge of recognized technical standards, I
            am conversant with modern building practices.
          </p>
          <button className=" bg-slate-400 p-2 rounded-md hover:bg-red-100">
            RESUME
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
