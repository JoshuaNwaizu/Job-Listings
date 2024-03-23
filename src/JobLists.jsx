import React from "react";
import data from "/public/data.json";
import { BsDot } from "react-icons/bs";

const JobLists = () => {
  return (
    <div className="my-6">
      <div className="flex flex-col gap-12 ">
        {data.map((items) => (
          <div
            key={items.id}
            className="bg-stone-50 px-5 rounded-md shadow-2xl"
          >
            <img
              src={items.logo}
              alt={items.company}
              className="h-[4rem] -translate-y-7"
            />
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-6 -mt-5">
                <h2 className="font-bold text-gray-500">{items.company}</h2>
                <div className="flex flex-row gap-3">
                  <p
                    className={
                      items.new &&
                      "bg-gray-500 text-stone-100 font-bold px-2 pt-1 rounded-full uppercase text-md"
                    }
                  >
                    {items.new ? "New!" : ""}
                  </p>
                  <p
                    className={
                      items.featured &&
                      "bg-gray-700 px-2 pt-1 text-stone-100 font-bold rounded-full uppercase text-md"
                    }
                  >
                    {items.featured ? "Featured" : ""}
                  </p>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-gray-700">{items.position} </h1>
              </div>
              <div>
                <div className="flex flex-row items-center gap-2 font-bold text-gray-400 mb-6">
                  <p>{items.postedAt}</p>
                  <BsDot />
                  <p>{items.contract} </p>
                  <BsDot />
                  <p> {items.location}</p>
                </div>
                <hr className="bg-gray-600" />
                <div className="mt-6 flex flex-row gap-4 flex-wrap text-gray-400 font-bold mb-6">
                  <p className="bg-gray-200 py-2 px-2 rounded-md">
                    {items.role}
                  </p>
                  <p className="bg-gray-200 py-2 px-2 rounded-md">
                    {items.level}
                  </p>
                  {items.languages.map((item) => (
                    <p className="bg-gray-200 py-2 px-2 rounded-md">{item}</p>
                  ))}
                  {items.tools.map((item) => (
                    <p className="bg-gray-200 py-2 px-2 rounded-md">{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobLists;
