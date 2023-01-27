import React from "react";
import { CiLocationOn } from "react-icons/ci";
import AddCity from "../header/addCity";

function Location({ setCityInputOpen, data, handleLocationClick }: any) {
  const today = new Date();
  let date = today.getDate();

  const month = today.getMonth();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const year = today.getFullYear();
  const hour = today.getHours();
  const minute = today.getMinutes();

  let city = "Loading...";

  if (data != null) {
    city = data.city;
  }

  return (
    <div className="w-full px-5 pt-10 flex align-top justify-between text-white">
      <div className="flex space-x-2">
        <button
          onClick={handleLocationClick}
          className="h-[1.7rem] w-[1.7rem] flex justify-center items-center hover:scale-125
         hover:bg-white hover:bg-opacity-30 rounded-full duration-200"
        >
          <CiLocationOn className="text-2xl mt-[3px] " />
        </button>
        <div className="space-y-1 cursor-default">
          <h1 className="text-2xl font-monsterrat">{`${
            city.length < 10 ? `${city}` : `${city.substring(0, 9)}...`
          }`}</h1>
          <div className="w-full flex space-x-5 text-sm font-monsterrat">
            <div className="">
              <h3>{`Today, ${monthNames[month]} ${
                date < 10 ? `0${date}` : `${date}`
              }`}</h3>
              <h3>{`${year}`}</h3>
            </div>
            <h3>
              {`${hour < 10 ? `0${hour}` : `${hour}`}`}:
              {`${minute < 10 ? `0${minute}` : `${minute}`}`}
            </h3>
          </div>
        </div>
      </div>
      <div className="align-right mt-[3px] pl-1">
        <AddCity setCityInputOpen={setCityInputOpen} />
      </div>
    </div>
  );
}

export default Location;
