import React from "react";
import { IoClose } from "react-icons/io5";

const SelectNav = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-stone-50 shadow-2xl py-6 -translate-y-11 rounded-xl">
        <div className="flex items-center flex-wrap gap-4 mx-5">
          <div className="flex flex-row gap-1 bg-stone-200 text-gray-500 font-bold rounded-md">
            <p className="p-2">Frontend </p>
            <span className="bg-gray-500 p-1 text-slate-100 flex items-center px-2 rounded-e-md text-2xl font-bold">
              <IoClose />
            </span>
          </div>
          <div className="flex flex-row gap-1 bg-stone-200 text-gray-500 font-bold">
            <p className="p-2"> CSS </p>
            <span className="bg-gray-500 p-1 text-slate-100 flex items-center px-2 text-2xl font-bold rounded-e-md">
              <IoClose />
            </span>
          </div>
          <div className="flex flex-row gap-1 bg-stone-200 text-gray-500 font-bold">
            <p className="p-2">JavaScript </p>
            <span className="bg-gray-500 py-1 text-slate-100 flex items-center px-2 text-2xl font-bold rounded-e-md">
              <IoClose />
            </span>
          </div>
        </div>
        <button className="font-bold mr-4 text-gray-500">Clear</button>
      </div>
    </>
  );
};

export default SelectNav;
