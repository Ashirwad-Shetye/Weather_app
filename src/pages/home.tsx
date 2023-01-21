import React, { useState } from "react";
import Location from "../components/location/location";
import CurrentWeather from "../components/weatherIcon/current_weather";
import CityInputModal from "../components/header/cityInputModal";
import { WEATHER_API_URL, OW_KEY } from "../api/api";
import Forecast from "../components/forecast/forecast";

function Home() {
  const [currentWeather, setCurrentWeather] = useState<any | null>(null);
  const [forecast, setForecast] = useState<any | null>(null);
  const [day, setDay] = useState(false);

  const [cityInputOpen, setCityInputOpen] = useState(true);

  const handleOnSearchChange = (searchData: any) => {
    console.log(searchData);

    const [lat, lon] = searchData.value.split(" ");

    const city: string = searchData.label;

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OW_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OW_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        console.log(weatherResponse);

        setCurrentWeather({ city, ...weatherResponse });
        setForecast({ city, ...forecastResponse });
      })
      .catch((err: string) => {
        console.error(err);
      });
  };

  return (
    <div className="bg-white w-[320px] h-[640px] rounded-3xl shadow-xl flex justify-center items-center">
      <div className="relative w-[300px] h-[620px] rounded-2xl">
        {cityInputOpen ? (
          <CityInputModal
            onSearchChange={handleOnSearchChange}
            setCityInputOpen={setCityInputOpen}
          />
        ) : (
          <></>
        )}
        <section className="space-y-1 w-full h-3/6 bg-red-300 bg-top bg-fixed bg-no-repeat rounded-xl">
          <Location setCityInputOpen={setCityInputOpen} data={currentWeather} />
          {currentWeather && <CurrentWeather data={currentWeather} />}
        </section>
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
}

export default Home;
