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
        <h1 className="font-roboto text-gray-600 ml-1 pt-1 mb-2">Daily</h1>
      </div>
      <div className="h-[160px] mx-1 overflow-y-scroll scrollbar-hide rounded-md">
        <Accordion allowZeroExpanded>
          {data.list.slice(0, 7).map((item: any, idx: any) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="relative border-2 text-gray-600 rounded-lg my-1 h-full flex space-x-3 cursor-pointer items-center">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      alt=""
                      className="w-10"
                    />
                    <label className="h-fit w-8 font-semibold font-monsterrat cursor-default">
                      {forecastDays[idx]}
                    </label>
                    <label className="text-sm font-roboto cursor-default">
                      {item.weather[0].description}
                    </label>
                    <label className="absolute right-2 font-roboto font-bold text-sm">
                      {Math.round(item.main.temp_min)}°c /{" "}
                      {Math.round(item.main.temp_max)}°c
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="font-roboto text-gray-600 text-sm mx-3">
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