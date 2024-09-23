import React from "react";
const Footer = () => {
  return (
    <>
      <div className=" bg-myblack">
        <footer className="text-white px-24 py-20">
          <h2 className="text-2xl mb-4">Thanks For Visiting !</h2>
          <div className="mb-1">Got Questions, Comments or Feedbacks?</div>
          <div className="mb-6">Feel free to reach out.</div>
          <span className=" text-purple-400">
            &copy; Anshul Singh - All Rights Reserved
          </span>
          <div className="mt-10 text-slate-500">
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
            >
              Privacy Policy
            </a>{" "}
            &#8226;{" "}
            <a href="https://www.linkedin.com/in/anshulsingh-/" target="_blank">
              LinkedIn
            </a>{" "}
            &#8226;{" "}
            <a href="https://github.com/Anshul-004" target="_blank">
              Github
            </a>{" "}
            &#8226;{" "}
            <a
              href="mailto:anshulsingh024@yahoo.com?subject=Regarding%20your%20Portfolio%20Website%20(anshulsingh.me)"
              target="_blank"
            >
              Email
            </a>
          </div>
        </footer>
      </div>
      <div className=" bg-purple-400 h-1"></div>
    </>
  );
};

export default Footer;
