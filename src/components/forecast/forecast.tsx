import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function Forecast({ data }: any) {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="container mt-28 h-[180px] rounded-xl">
      <div>
        <h1 className="font-roboto text-gray-500 ml-1 pt-2">Daily</h1>
      </div>
      <div className="relative h-[160px] mx-1 overflow-y-scroll scrollbar-hide rounded-md">
        <Accordion allowZeroExpanded>
          {data.list.slice(0, 7).map((item: any, idx: any) => (
            <AccordionItem key={idx} className="">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="relative border-2 border-gray-100 text-gray-600 rounded-lg my-[0.50rem] px-2 h-10 flex space-x-3 cursor-pointer items-center">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      alt=""
                      className="w-6 cursor-pointer"
                    />
                    <label className="h-fit w-8 font-semibold font-monsterrat cursor-pointer">
                      {forecastDays[idx]}
                    </label>
                    <label className="text-sm font-roboto cursor-pointer">
                      {item.weather[0].description}
                    </label>
                    <label className="absolute right-2 font-roboto font-bold text-sm cursor-pointer">
                      {Math.round(item.main.temp_min)}°c /{" "}
                      {Math.round(item.main.temp_max)}°c
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="font-roboto text-gray-600 text-sm px-3 py-1 rounded-lg bg-gray-100">
                  <div className="relative">
                    <label className="">Pressure</label>
                    <label className="absolute right-2">
                      {item.main.pressure} hPa
                    </label>
                  </div>
                  <div className="relative">
                    <label className="">Humidity</label>
                    <label className="absolute right-3">
                      {item.main.humidity} %
                    </label>
                  </div>
                  <div className="relative">
                    <label className="">Clouds</label>
                    <label className="absolute right-3">
                      {item.clouds.all} %
                    </label>
                  </div>
                  <div className="relative">
                    <label className="">Wind Speed</label>
                    <label className="absolute right-3">
                      {item.wind.speed} m/s
                    </label>
                  </div>
                  <div className="relative">
                    <label className="">Sea level</label>
                    <label className="absolute right-3">
                      {item.main.sea_level} m
                    </label>
                  </div>
                  <div className="relative">
                    <label className="">Feels like </label>
                    <label className="absolute right-3">
                      {Math.round(item.main.feels_like)} °c
                    </label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Forecast;
