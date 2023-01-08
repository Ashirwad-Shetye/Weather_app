import React from "react";
import Hourly from "./hourly";

function Forecasts() {
  return (
    <div className="relative rounded-lg mt-1 h-40">
      {/* Triggers */}
      <div className="grid grid-cols-2 place-items-center h-5">
        <button className="bg-slate-400 w-20 h-6 px-2 rounded-lg text-white">
          Hourly
        </button>
        <button className="bg-slate-300 w-20 px-2 rounded-lg text-white">
          Daily
        </button>
      </div>
      {/* Contents */}
      <div className="relative rounded-lg mt-3 h-[130px] overflow-x-scroll scrollbar-hide">
        <Hourly />
      </div>
    </div>
  );
}

export default Forecasts;
