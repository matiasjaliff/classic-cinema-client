import React from "react";

const Plus = () => {
  return (
    <div className="w-[12vw] h-[12vw] flex items-center m-5 rounded-full bg-green-600/60 drop-shadow-2xl">
      <a href="#" className="h-7/12 w-7/12 m-auto">
        <svg
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </a>
    </div>
  );
};

export default Plus;
