import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function SearchField() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" hidden relative  lg:flex">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" transition-all duration-300 ease-in-out text-gray-800 focus:outline-none "
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
      <input
        type="text"
        placeholder="Поиск"
        className={`${
          isOpen ? " w-40 px-3" : "w-0 px-0"
        }  py-2 text-xs  text-smtransition-all duration-300 ease-in-out appearance-none rounded-3xl  focus:  outline-none bg-slate-50 `}
      />
    </div>
  );
}

export default SearchField;
