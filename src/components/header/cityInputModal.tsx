import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api/api";

const CityInputModal = ({ onSearchChange, setCityInputOpen }: any) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue: string, callback: any) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response: any) => response.json())
      .then((response: any) => {
        return {
          options: response.data.map((city: any) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleCloseClick = () => {
    setCityInputOpen(false);
  };

  const handleOnChange = (searchData: any) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <aside className="backdrop-blur-sm bg-slate-700 bg-opacity-40 absolute z-50 w-full h-full rounded-xl flex justify-center">
      <div className="absolute mt-10 flex space-x-2 justify-center items-center">
        <AsyncPaginate
          placeholder="Search for city"
          debounceTimeout={600}
          defaultOptions
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          className="w-56"
        />
        <button className="flex justify-center items-center text-center hover:scale-125 w-8 h-8 rounded-full duration-100">
          <MdClose
            onClick={handleCloseClick}
            className="ml-1 text-2xl text-white hover:bg-white hover:bg-opacity-20 rounded-full"
          />
        </button>
      </div>
    </aside>
  );
};

export default CityInputModal;
