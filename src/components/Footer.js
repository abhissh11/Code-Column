import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="md:px-20 px-4 py-10 bg-blue-700 text-gray-300 mt-10">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-16">
          <div className="md:w-1/3">
            <Link to="/">
              <h1 className="text-white text-xl md:text-2xl font-bold hover:text-gray-300">
                Code Column
              </h1>
            </Link>
            <p>
              Explore the resources curated in way to make it one -stop solution
              for your all of your code endeavours. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eaque tempora rem quod accusantium.
              Officiis blanditiis pariatur maiores rerum, sed eaque nihil
              necessitatibus repellat recusandae porro accusamus eum. Quos,
              porro adipisci.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col gap-3">
            <h2 className="text-white text-xl md:text-2xl font-bold hover:text-gray-500">
              Quick Links
            </h2>
            <Link>Resource Hub</Link>
            <Link>Interview Ques.</Link>
            <Link>Courses</Link>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-white text-xl md:text-2xl font-bold hover:text-gray-500">
              Legal
            </h2>
            <ul>
              <li>contact@codecolumn.com</li>
              <li>+91-6207XXXXX</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
