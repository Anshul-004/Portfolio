import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const Project = () => {
  return (
    <div className="px-8 md:px-16 lg:px-32 py-8">
      <div
        className="Title text-3xl md:text-4xl lg:text-5xl text-center pb-8"
        id="projects"
      >
        Highlighted Projects
      </div>
      <div className="CardCollect flex flex-wrap gap-6 md:gap-8 lg:gap-12 justify-center mt-4 text-lg">
        {/* Card 1 */}
        <Card className="mt-4 w-full sm:w-96 hover:shadow-2xl transition-shadow duration-300 border-purple-400 border-2 hover:bg-purple-400 hover:text-white">
          <CardBody>
            <img src="/game.png" alt="favicon" className="mb-4 h-12 w-12" />
            <Typography
              variant="h5"
              className="mb-2 text-lg md:text-xl lg:text-2xl"
            >
              Games SQL Database
            </Typography>
            <Typography className="text-sm md:text-base lg:text-lg text-justify">
              A SQLite Database, which stores the data of games a user has on
              steam, and calculates the metrics like Most expensive game, Most
              played game etc.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a
              href="https://github.com/Anshul-004/Games-Database-SQL"
              target="_blank"
              className="inline-block"
            >
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                {" "}
                Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card className="mt-4 w-full sm:w-96 hover:shadow-2xl transition-shadow duration-300 border-purple-400 border-2 hover:bg-purple-400 hover:text-white">
          <CardBody>
            <img
              src="/complaint.png"
              alt="favicon"
              className="mb-4 h-12 w-12"
            />
            <Typography
              variant="h5"
              className="mb-2 text-lg md:text-xl lg:text-2xl"
            >
              Complaint Addressal Portal
            </Typography>
            <Typography className="text-sm md:text-base lg:text-lg text-justify">
              A Simple Portal to digitalize the complaint mechanism, consisting
              of admin and user logins, with database Connectivity and email
              validations.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a
              href="https://github.com/Anshul-004/Complaint-addressal-portal"
              target="_blank"
              className="inline-block"
            >
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                {" "}
                Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card className="mt-4 w-full sm:w-96 hover:shadow-2xl transition-shadow duration-300 border-purple-400 border-2 hover:bg-purple-400 hover:text-white">
          <CardBody>
            <img
              src="/assistant.png"
              alt="favicon"
              className="mb-4 h-12 w-12"
            />
            <Typography
              variant="h5"
              className="mb-2 text-lg md:text-xl lg:text-2xl"
            >
              TTS Assistant
            </Typography>
            <Typography className="text-sm md:text-base lg:text-lg text-justify">
              A Simple Text-To-Speech Assistant, created in Python, uses pyttsx3
              API to reply as programmed. Also capable of playing mini-games.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a
              href="https://github.com/Anshul-004/TTS-Assistant"
              target="_blank"
              className="inline-block"
            >
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                {" "}
                Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Project;
