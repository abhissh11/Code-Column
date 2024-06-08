import {
  Atom,
  FileQuestion,
  FileStack,
  Handshake,
  MoveRight,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Interview() {
  return (
    <>
      <div className="mx-4 md:px-20 mt-10">
        <div className="flex flex-row flex-wrap gap-10 justify-center">
          <Link to="/">
            <div
              className="w-64 h-44 bg-sky-100 px-4 py-6 flex flex-col gap-2 justify-center items-center
           text-lg font-semibold border-2 border-blue-200 rounded-md hover:border-blue-500 hover:scale-105 transition-all"
            >
              <FileStack size={32} className="text-blue-500" />
              <h2 className="text-center">70 JavaScript Questions</h2>
              <MoveRight />
            </div>
          </Link>
          <Link to="/">
            <div
              className="w-64 h-44 bg-sky-100 px-10 py-6 flex flex-col gap-2 justify-center items-center
           text-lg font-semibold border-2 border-blue-200 rounded-md hover:border-blue-500 hover:scale-105 transition-all"
            >
              <FileQuestion size={32} className="text-blue-500" />
              <h2 className="text-center">Top 150 Frontend Interview Ques.</h2>
              <MoveRight />
            </div>
          </Link>
          <Link to="/">
            <div
              className="w-64 h-44 bg-sky-100 px-4 py-6 flex flex-col gap-2 justify-center items-center
           text-lg font-semibold border-2 border-blue-200 rounded-md hover:border-blue-500 hover:scale-105 transition-all"
            >
              <Atom size={32} className="text-blue-500" />
              <h2 className="text-center">150 ReactJS Questions.</h2>
              <MoveRight />
            </div>
          </Link>
          <Link to="/">
            <div
              className="w-64 h-44 bg-sky-100 px-4 py-6 flex flex-col gap-2 justify-center items-center
           text-lg font-semibold border-2 border-blue-200 rounded-md hover:border-blue-500 hover:scale-105 transition-all"
            >
              <Handshake size={32} className="text-blue-500" />
              <h2 className="text-center">200 MERN Interview Questions.</h2>
              <MoveRight />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
