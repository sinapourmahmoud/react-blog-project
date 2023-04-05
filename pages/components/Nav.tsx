import React from "react";
import Link from "next/link";
const Nav: React.FC = () => {
  return (
    <header className="flex items-center  px-2 py-4 justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://links.papareact.com/yvf"
            alt="logo"
          />
        </Link>
        <h3 className="cursor-pointer font-medium">About</h3>
        <h3 className="cursor-pointer font-medium">contact</h3>
        <h3 className="cursor-pointer font-medium  py-3 px-5 bg-green-400 text-white rounded-3xl">
          Server
        </h3>
      </div>
      <div className="md:flex items-center gap-4 hidden">
        <h3 className="cursor-pointer font-medium text-gray-600">contact</h3>
        <h3 className="cursor-pointer font-medium  py-3 px-5 border border-green-400 text-green-400 rounded-3xl">
          Get started
        </h3>
      </div>
    </header>
  );
};

export default Nav;
