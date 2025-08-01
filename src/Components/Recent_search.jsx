import React from "react";

const Recent_search = ({
  recentHistory,
  setRecentHistory,
  setselectedHistory,
}) => {
  const clearHistory = () => {
    localStorage.clear();
    setRecentHistory([]);
  };
  return (
    <div className="col-span-1 dark:bg-zinc-700 bg-red-100 pt-4 px-6">
      <h1 className=" text-xl dark:text-white text-zinc-700 flex px-6">
        <span>Recent History</span>{" "}
        <button onClick={clearHistory} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ffffff"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </button>
      </h1>

      <ul className="text-left overflow-auto text-md pt-3 leading-8">
        {recentHistory &&
          recentHistory.map((item, index) => (
            <div className="flex justify-between pr-2">
              <li
                key={index}
                onClick={() => setselectedHistory(item)}
                className="p-1 pl-5 truncate dark:text-zinc-400 text-zinc-700 cursor-pointer dark:hover:bg-zinc-600 dark:hover:text-zinc-300 hover:bg-red-200 hover:text-zinc-800"
              >
                {item}
              </li>
              <button onClick={clearHistory} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#ffffff"
                >
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Recent_search;
