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

const productData = [
  {
    title: "Resource Hub",
    icon: FileStack,
    link: "/resource-hub",
  },
  {
    title: "Interview Ques.",
    icon: FileQuestion,
    link: "/interview-ques",
  },
  {
    title: "Courses",
    icon: Atom,
    link: "/courses",
  },
  {
    title: "Join the Community",
    icon: Handshake,
    link: "/community",
  },
];

export default function ProductLists() {
  return (
    <div className="mx-4 md:px-20 mt-10">
      <div className="flex flex-row flex-wrap gap-10 justify-center">
        {productData.map((product, index) => (
          <Link key={index} to={product.link}>
            <div
              className="w-64 bg-sky-100 px-10 py-6 flex flex-col gap-2 justify-center items-center
           text-lg font-semibold border-2 border-blue-200 rounded-md hover:border-blue-500 hover:scale-105 transition-all"
            >
              <product.icon size={32} className="text-blue-500" />
              <h2>{product.title}</h2>
              <MoveRight />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
