import React from "react";
const Project = () => {
  return (
    <div className="px-24 py-8">
      <div className="Title text-5xl text-center pb-8" id="projects">
        Highlighted Projects
      </div>
      <div className="CardCollect flex flex-wrap gap-12 justify-center mt-4 text-lg">
        {/* cards begin */}
        <div className="card bg-slate-200 flex h-96 w-72 justify-center flex-col p-2 rounded-md border-black border-4 border-dashed hover:shadow-md">
          <p className="Title font-semibold text-center">This is a Title</p>
          <p className="Desc text-center pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            voluptatibus facilis officiis dolorum! At illo aspernatur temporibus
            laboriosam distinctio saepe eum id hic, voluptatem cumque mollitia
            impedit dicta ea autem.
          </p>
        </div>

        <div className="card bg-slate-200 flex h-96 w-72 justify-center flex-col p-2 rounded-md border-black border-4 border-dashed">
          <p className="Title font-semibold text-center">Complaint Addressal Portal</p>
          <p className="Desc text-center pt-2">
            A Full Stack Project, made using HTML, CSS, JS, Nodejs and MongoDB for Database.
            It solves a simple problem of lack of unified portal to register grivenaces of the public. It has an admin panel and User login, and all complaints are segregated and distributed accordingly.
          </p>
        </div>

        <div className="card bg-slate-200 flex h-96 w-72 justify-center flex-col p-2 rounded-md border-black border-4 border-dashed">
          <p className="Title font-semibold text-center">This is a Title</p>
          <p className="Desc text-center pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            voluptatibus facilis officiis dolorum! At illo aspernatur temporibus
            laboriosam distinctio saepe eum id hic, voluptatem cumque mollitia
            impedit dicta ea autem.
          </p>
        </div>

        <div className="card bg-slate-200 flex h-96 w-72 justify-center flex-col p-2 rounded-md border-black border-4 border-dashed">
          <p className="Title font-semibold text-center">This is a Title</p>
          <p className="Desc text-center pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            voluptatibus facilis officiis dolorum! At illo aspernatur temporibus
            laboriosam distinctio saepe eum id hic, voluptatem cumque mollitia
            impedit dicta ea autem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
