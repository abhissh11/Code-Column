import {
  ArrowBigRight,
  Atom,
  FileQuestion,
  FileStack,
  Handshake,
  MoveRight,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductLists() {
  return (
    <>
      <div className="mx-4 md:px-20 mt-10">
        <div className="flex flex-row flex-wrap gap-10 justify-center">
          <Link to="/resource-hub">
            <div
              className="w-64 bg-sky-100 px-10 py-6 flex flex-col gap-2 justify-center items-center
           text-lg font-semibold border-2 border-blue-200 rounded-md hover:border-blue-500 hover:scale-105 transition-all"
            >
              <FileStack size={32} className="text-blue-500" />
              <h2>Resource Hub</h2>
              <MoveRight />
            </div>
          </Link>
          <Link to="/interview-ques">
            <div
              className="w-64 bg-sky-100 px-10 py-6 flex flex-col gap-2 justify-center items-center
           text-lg font-semibold border-2 border-blue-200 rounded-md hover:border-blue-500 hover:scale-105 transition-all"
            >
              <FileQuestion size={32} className="text-blue-500" />
              <h2>Interview Ques.</h2>
              <MoveRight />
            </div>
          </Link>
          <Link to="/courses">
            <div
              className="w-64 bg-sky-100 px-10 py-6 flex flex-col gap-2 justify-center items-center
           text-lg font-semibold border-2 border-blue-200 rounded-md hover:border-blue-500 hover:scale-105 transition-all"
            >
              <Atom size={32} className="text-blue-500" />
              <h2>Courses</h2>
              <MoveRight />
            </div>
          </Link>
          <Link to="/community">
            <div
              className="w-64 bg-sky-100 px-10 py-6 flex flex-col gap-2 justify-center items-center
           text-lg font-semibold border-2 border-blue-200 rounded-md hover:border-blue-500 hover:scale-105 transition-all"
            >
              <Handshake size={32} className="text-blue-500" />
              <h2>Join the Community</h2>
              <MoveRight />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
