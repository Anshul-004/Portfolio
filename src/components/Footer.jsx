import React from "react";

const Footer = () => {
  return (
    <div className="bg-myblack">
      <footer className="text-white px-6 md:px-12 lg:px-24 py-10 md:py-16 lg:py-20">
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-4">Thanks For Visiting!</h2>
        <div className="mb-1 text-sm md:text-base lg:text-lg">Got Questions, Comments or Feedbacks?</div>
        <div className="mb-6 text-sm md:text-base lg:text-lg">Feel free to reach out.</div>
        <span className="text-purple-400 text-sm md:text-base lg:text-lg">
          &copy; Anshul Singh - All Rights Reserved
        </span>
        <div className="mt-10 text-slate-500 text-sm md:text-base lg:text-lg">
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            Privacy Policy
          </a>{" "}
          &#8226;{" "}
          <a
            href="https://www.linkedin.com/in/anshulsingh-/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            LinkedIn
          </a>{" "}
          &#8226;{" "}
          <a
            href="https://github.com/Anshul-004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;