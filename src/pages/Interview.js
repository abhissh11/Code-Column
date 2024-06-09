import React from "react";
import { Link } from "react-router-dom";
import {
  Atom,
  FileQuestion,
  FileStack,
  Handshake,
  MoveRight,
} from "lucide-react";

const cardData = [
  {
    title: "70 JavaScript Questions",
    icon: FileStack,
    link: "/javascript-questions",
  },
  {
    title: "Top 150 Frontend Interview Ques.",
    icon: FileQuestion,
    link: "/frontend-questions",
  },
  {
    title: "150 ReactJS Questions.",
    icon: Atom,
    link: "/reactjs-questions",
  },
  {
    title: "200 MERN Interview Questions.",
    icon: Handshake,
    link: "/mern-questions",
  },
];

export default function Interview() {
  return (
    <div className="mx-4 md:px-20 mt-10">
      <div className="mt-20">
        <h1 className="text-3xl font-bold text-blue-500">
          Explore and learn from the Varied range of Questions:
        </h1>
      </div>
      <div className="flex flex-row flex-wrap gap-10 justify-center mt-20">
        {cardData.map((card, index) => (
          <Link key={index} to={card.link}>
            <div
              className="w-64 h-44 bg-sky-100 px-4 py-6 flex flex-col gap-2 justify-center items-center
           text-lg font-semibold border-2 border-blue-200 rounded-md hover:border-blue-500 hover:scale-105 transition-all"
            >
              <card.icon size={32} className="text-blue-500" />
              <h2 className="text-center">{card.title}</h2>
              <MoveRight />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
