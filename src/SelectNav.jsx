import React from "react";
import { IoClose } from "react-icons/io5";

const id = Math.floor(Math.random() * 100) + 1;

const SelectNav = ({ filteredData, onDelete, onDeleteAll }) => {
  return (
    <>
      {filteredData.length > 0 && (
        <div className="flex items-center justify-center bg-stone-50 shadow-2xl py-6 -translate-y-11 rounded-xl -mb-10 min-[1280px]:mx-[8rem]">
          <div className="flex items-center flex-wrap gap-4 mx-5 ">
            {filteredData.map((item, index) => (
              <div
                className="flex flex-row gap-1 bg-stone-200 rounded-md text-gray-500 font-bold max-[320px]:font-semibold"
                key={index}
              >
                <p className="p-2 max-[320px]:p-1">{item}</p>
                <span
                  className="bg-gray-500 hover:bg-gray-700 transition-all py-1 text-slate-100 flex items-center px-2 text-2xl font-bold rounded-e-md max-[320px]:text-[1rem]"
                  onClick={() => onDelete(item)}
                >
                  <IoClose />
                </span>
              </div>
            ))}
          </div>
          <button
            className="font-bold mr-4 text-gray-500 hover:text-gray-700 transition-all"
            onClick={onDeleteAll}
          >
            Clear
          </button>
        </div>
      )}
    </>
  );
};

export default SelectNav;
