import React from "react";
import { ReactComponent as ClearSkyNight } from "../../assets/weatherIcons/clear_sky_night.svg";
import data from "../../test.json";
// import { getForecast } from "../../api/apiCalls";

function Hourly() {
  const hourlyTemp: any[] = [];
  const today = data.days[0].hours;

  for (let i = 0; i < today.length; i++) {
    let tempResult = (data.days[0].hours[i].temp - 32) * (5 / 9);
    let celTemp = tempResult.toFixed(0);
    hourlyTemp.push(celTemp);
  }

  // console.log(getForecast("New Delhi"));

  return (
    <div className="h-full w-fit grid grid-flow-col-dense gap-3 rounded-md">
      {hourlyTemp.map((temp) => (
        <section
          key={temp.id}
          className="w-[70px] bg-slate-200 flex flex-col items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          <h2 className="text-md font-monsterrat text-gray-600">01:00</h2>
          <ClearSkyNight className="my-2 w-12 h-12" />
          <h1 className="text-lg font-monsterrat font-bold text-gray-700">
            {temp}°c
          </h1>
        </section>
      ))}
    </div>
  );
}

export default Hourly;
