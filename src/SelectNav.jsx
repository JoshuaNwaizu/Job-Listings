import React from "react";
import { IoClose } from "react-icons/io5";

const initialItems = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
];
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
