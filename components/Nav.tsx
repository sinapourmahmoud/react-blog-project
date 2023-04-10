import React, { useEffect, useState } from "react";
import Link from "next/link";
//scroll interface

const Nav: React.FC = () => {
  let [scrolled, setScrolled] = useState<boolean>(false);
  const handleScrolling = () => {
    let pageOffset = window.pageYOffset;
    if (pageOffset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", (e: any) => {
      handleScrolling();
    });
    return () => {
      removeEventListener("scroll", handleScrolling);
    };
  }, []);
  return (
    <header className={` sticky top-0 bg-white ${scrolled && " shadow-xl"}`}>
      <div className="mx-auto max-w-7xl flex items-center  px-2 py-4 justify-between">
        <div className="flex items-center gap-6">
          <Link href="/">
            <img
              className={` cursor-pointer object-contain transition-all duration-200 ${
                !scrolled ? "w-52" : "w-44"
              }`}
              src="https://links.papareact.com/yvf"
              alt="logo"
            />
          </Link>
          <h3 className="cursor-pointer font-medium">About</h3>
          <h3 className="cursor-pointer font-medium">contact</h3>
          <h3 className="cursor-pointer font-medium  py-3 px-5 bg-green-600 text-white rounded-3xl">
            Server
          </h3>
        </div>
        <div className="md:flex items-center gap-4 hidden">
          <h3 className="cursor-pointer font-medium text-gray-600">contact</h3>
          <h3 className="cursor-pointer font-medium  py-3 px-5 border border-green-600 text-green-600 rounded-3xl">
            Get started
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Nav;
