import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Braces, Cross, CrossIcon, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="py-5 px-4 md:px-20 shadow-md">
        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-row gap-20 items-center">
            <Link to="/">
              <h1 className="hidden md:block text-xl md:text-2xl font-bold hover:text-blue-500">
                Code Column
              </h1>
              <div className="md:hidden hover:text-blue-500">
                <Braces size={28} />
              </div>
            </Link>
          </div>

          <div className="flex md:gap-5 gap-3 items-center">
            <Link to="/book-mentor">
              <h1 className="text-lg text-white rounded-md text-center px-4  py-1 bg-blue-500 hover:bg-blue-700">
                Book 1:1 Mentorship
              </h1>
            </Link>
            <div className="cursor-pointer hover:scale-110">
              {isMenuOpen ? (
                <X size={28} onClick={handleMenuClick} />
              ) : (
                <Menu size={28} onClick={handleMenuClick} />
              )}
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <>
            <div className="flex absolute  bg-cyan-50 p-7 rounded-md right-0 md:mx-20 mx-4 mt-5 border border-blue-300">
              <ul className="flex flex-col gap-4 ">
                <Link
                  to="/resource-hub"
                  className="hover:border-b-2 border-blue-500"
                  onClick={handleMenuClick}
                >
                  Resource Hub
                </Link>
                <Link
                  to="/interview-ques"
                  className="hover:border-b-2 border-blue-500"
                  onClick={handleMenuClick}
                >
                  Interview Ques.
                </Link>
                <Link
                  to="/courses"
                  className="hover:border-b-2 border-blue-500"
                  onClick={handleMenuClick}
                >
                  Courses
                </Link>
                <Link
                  to="/community"
                  className="hover:border-b-2 border-blue-500"
                  onClick={handleMenuClick}
                >
                  Join the Community
                </Link>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}
