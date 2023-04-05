import React from "react";

//components
import Nav from "./components/Nav";
const index = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Nav />
      <div className="flex justify-between items-center bg-yellow-400 rounded-md px-2 md:px-5 py-3 lg:py-0">
        <div className="flex flex-col gap-2">
          <h2 className="text-6xl font-sarif max-w-xl">
            <span className="underline underline-offset-4 ">Medium</span> is a
            place to write, read and connect
          </h2>
          <h2>
            Its easy to read and write comments and bogs for people and have fun
            and find friend
          </h2>
        </div>
        <img
          className="hidden h-32 md:block lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="medium-logo"
        />
      </div>
    </div>
  );
};

export default index;
