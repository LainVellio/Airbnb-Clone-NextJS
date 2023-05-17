"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer whitespace-nowrap">
      <div className="st-flex-row st-text-sm text-center">
        <div className="hidden sm:block px-6 flex-1">Anywhere</div>
        <div className="hidden sm:block px-6 flex-1 border-x-[1px]">
          Any Week
        </div>
        <div className="st-flex-row w-full pl-6 pr-2 text-gray-600 gap-3">
          <div className="sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
