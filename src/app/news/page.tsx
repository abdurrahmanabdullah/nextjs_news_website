// import NewsList from "@/components/News/NewsList";
import React from "react";

function Newspage() {
  return (
    <div className="py-12 m-2">
      <h2 className="text-2xl font-bold mb-8 ">Latest News</h2>
      {/* <NewsList /> */}
      {/* tailwind css  */}

      <div className="bg-violet-200 h-10 w-full border-2 border-violet-600 rounded-md my-10 p-6 flex justify-center items-center">
        {" "}
        <h1 className="text-center text-lg text-[#973F29] text-[30px]  ">
          Tailwind css{" "}
        </h1>
      </div>
      {/*  */}
      <div className="flex justify-center space-x-6 mt-2">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>{" "}
        <div className="h-16 w-16 rounded-full bg-orange-500"></div>
        <div className="h-16 w-16 rounded-full bg-green-500"></div>
      </div>
      {/* media query */}

      <div className="sm:bg-amber-400 md:bg-amber-900 p-2.5 mx-2 my-2">
        <p className="text-white">I appear on screen wider than 768px </p>
      </div>
      {/*  */}
      <div className=" flex flex-wrap sm:flex-row gap-6 md:w-2/3 border  mx-2 my-2">
        <div className="w-64 h-44 flex-1 bg-pink-400 text-white p-2 shadow-lg">
          01
        </div>
        <div className="w-64 h-44 flex-2 bg-pink-400 text-white p-2 shadow-lg">
          02
        </div>
        <div className="w-64 h-44  bg-pink-400 text-white p-2 shadow-lg">
          03
        </div>
        <div className="w-64 h-44 bg-pink-400 text-white p-2 shadow-lg">04</div>
        <div className="w-64 h-44 bg-pink-400 text-white p-2 shadow-lg">05</div>
        <div className="w-64 h-44 bg-pink-400 text-white p-2 shadow-lg">06</div>
      </div>
    </div>
  );
}

export default Newspage;
