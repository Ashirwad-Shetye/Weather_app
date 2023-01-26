import React from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
import { BsClouds } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import { SlSpeedometer } from "react-icons/sl";

function CurrentWeather({ data }: any) {
  console.log(data);
  return (
    <div className="realtive mx-auto w-full space-y-6 text-center text-white cursor-default">
      <div className="mx-auto w-fit my-auto flex space-x-3 text-left items-center ">
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather icon"
          className="w-[7rem] m-3"
        />
        <div>
          <h1 className="text-6xl font-roboto ">
            {Math.round(data.main.temp)}°c
          </h1>
          <h3 className="font-monsterrat text-lg">
            {data.weather[0].description}
          </h3>
        </div>
      </div>
      <div className="bg-gray-500 font-bold font-roboto space-x-1 bg-opacity-30 mx-2 rounded-md">
        <span className="">Feels like</span>
        <span className="">{Math.round(data.main.feels_like)}°c</span>
      </div>
      <div className="border-2 rounded-xl flex flex-col justify-center">
        <div className="mx-auto w-full h-24 font-bold">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 ml-6 my-4 text-gray-600 cursor-default">
            <section className="flex space-x-3 items-center">
              <MdOutlineWaterDrop className="text-2xl" />
              <h3 className="text-sm font-roboto">{data.main.humidity} %</h3>
            </section>
            <section className="flex space-x-3 items-center">
              <BsClouds className="text-2xl" />
              <h3 className="text-sm font-roboto">{data.clouds.all} %</h3>
            </section>
            <section className="flex space-x-3 items-center">
              <BiWind className="text-2xl" />
              <h3 className="text-sm font-roboto">{data.wind.speed} m/s</h3>
            </section>
            <section className="flex space-x-3 items-center">
              <SlSpeedometer className="text-2xl" />
              <h3 className="text-sm font-roboto">{data.main.pressure} hPa</h3>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
