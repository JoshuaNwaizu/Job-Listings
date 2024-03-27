import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";

const JobLists = ({ data, filtered, onFilter }) => {
  //Modified state
  const [modified, setModified] = useState([]);

  const modifiedData = () => {
    // checking if filtered (passed from the App Jsx component) is less than 0

    if (filtered.length > 0) {
      //Creating a new variable new data to store the modified items
      const newData = modified.filter((item) => {
        return filtered.every((key) => {
          return (
            item.role === key ||
            item.level === key ||
            item.languages.includes(key) ||
            item.tools.includes(key)
          );
        });
      });
      setModified(newData);
    } else {
      setModified(data);
    }
  };

  useEffect(() => {
    modifiedData();
  }, [filtered]);

  return (
    <div className="my-7 mt-6 min-[1280px]:mx-[8rem]">
      <div className="flex flex-col gap-12 ">
        <div></div>
        {modified.map((items) => (
          <div
            key={items.id}
            className={
              items.featured
                ? "bg-stone-50 px-5 rounded-xl shadow-2xl border-l-8 border-gray-500 "
                : "bg-stone-50 px-5 rounded-xl shadow-2xl"
            }
          >
            <div>
              <img
                src={items.logo}
                alt={items.company}
                className="h-[4rem] -translate-y-7 max-[320px]:h-[3rem] "
              />
            </div>

            <div className="min-[883px]:flex min-[883px]:justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-6 -mt-5 max-[320px]:gap-4">
                  <h2 className="font-bold text-gray-500">{items.company}</h2>
                  <div className="flex flex-row gap-3 max-[320px]:gap-2">
                    <p
                      className={
                        items.new
                          ? "bg-gray-500 text-stone-100 font-bold px-2 pt-1 rounded-full uppercase text-md max-[320px]:px-2 max-[320px]:text-sm"
                          : undefined
                      }
                    >
                      {items.new ? "New!" : ""}
                    </p>
                    <p
                      className={
                        items.featured
                          ? "bg-gray-700 px-2 pt-1 text-stone-100 font-bold rounded-full uppercase text-md max-[320px]:px-2 max-[320px]:text-sm"
                          : undefined
                      }
                    >
                      {items.featured ? "Featured" : ""}
                    </p>
                  </div>
                </div>

                <div>
                  <h1 className="font-bold text-gray-700">{items.position} </h1>
                </div>

                <div className="flex flex-row items-center gap-2 font-bold text-gray-400 mb-6 max-[320px]:gap-0 ">
                  <p>{items.postedAt}</p>
                  <BsDot />
                  <p>{items.contract} </p>
                  <BsDot />
                  <p> {items.location}</p>
                </div>
              </div>
              <div>
                <hr className="bg-gray-600 mb-5 min-[883px]:hidden" />

                <div className="mt-6 flex flex-row gap-4 flex-wrap text-gray-400 font-bold mb-6 max-[1280px]:mt-0">
                  <p
                    className="bg-gray-200 py-2 px-2 rounded-md hover:bg-gray-500 hover:text-gray-200 transition-all"
                    onClick={() => onFilter(items.role)}
                  >
                    {items.role}
                  </p>
                  <p
                    className="bg-gray-200 py-2 px-2 rounded-md hover:bg-gray-500 hover:text-gray-200 transition-all"
                    onClick={() => onFilter(items.level)}
                  >
                    {items.level}
                  </p>
                  {items.languages.map((item) => (
                    <p
                      className="bg-gray-200 py-2 px-2 rounded-md hover:bg-gray-500 hover:text-gray-200 transition-all"
                      key={item}
                      onClick={() => onFilter(item)}
                    >
                      {item}
                    </p>
                  ))}
                  {items.tools.map((item) => (
                    <p
                      className="bg-gray-200 py-2 px-2 rounded-md hover:bg-gray-500 hover:text-gray-200 transition-all"
                      key={item}
                      onClick={() => onFilter(item)}
                    >
                      {item}
                    </p>
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
