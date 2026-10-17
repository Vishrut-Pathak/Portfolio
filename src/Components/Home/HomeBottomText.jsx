import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="text-white font-[font2] flex items-center justify-center gap-2">
      <div className="border-5 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full leading-13 pt-6 pb-0 px-10">
        <Link className=" text-[6vw] mt-2" to="/projects">
          Projects
        </Link>
      </div>

      <div className="border-5 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full leading-13 pt-6 pb-0 px-10">
        <Link className="text-[6vw] mt-2" to="/agence">
          About me
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
