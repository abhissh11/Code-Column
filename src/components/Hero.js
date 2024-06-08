import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="mx-4 md:mx-20 my-10">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
          <div className="flex flex-col gap-8 max-w-[32rem]">
            <h1 className="text-4xl font-semibold">
              <span className="text-blue-500">Welcome to Code Column</span>{" "}
              <br />
              From Code to Cloud
            </h1>
            <p className="text-gray-600">
              Explore the resources curated in way to make it one -stop solution
              for your all of your code endeavours.
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              tempora rem quod accusantium. Officiis blanditiis pariatur
              maiores.
            </p>
            <button className="px-4 py-2 bg-blue-500 w-[14rem] rounded-md text-white hover:bg-blue-700">
              <Link to="/courses">Enroll Now</Link>
            </button>
          </div>
          <div className=" p-1 md:mt-10 rounded-md w-[20rem] h-[12rem] md:w-[32rem] md:h-[18rem] bg-blue-500">
            <iframe
              className="rounded-md w-full h-full "
              // width="550"
              // height="300"
              src="https://www.youtube.com/embed/RDxQEzXN8AU?si=F2zXYINvve_eAkCd"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
