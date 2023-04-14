import React from "react";
import "./countryInfo.css";

import { useCountryData } from "../Context/CountryContext";
import {
  useFullInfoData,
  useUpdateFullInfoData,
} from "../Context/FullInfoContext";

const CountryInfo = () => {
  const countryData = useCountryData();
  const showFullInfo = useFullInfoData();
  const updateFullInfoData = useUpdateFullInfoData();

  const hideFullView = () => {
    var view = document.getElementById("countryView");
    if (view !== undefined) {
      view.classList.remove("countryView__full");
    }
  };

  return (
    <div className="countryinfo">
      <img src={countryData.flagpng} alt="flag" />
      <h1>{countryData.name}</h1>
      <h4>{countryData.nativeNames}</h4>
      <div className="countryinfo__details">
        <span>
          <h3>Capital:</h3>
          <p>{countryData.capital}</p>
        </span>
        <span>
          <h3>Currency:</h3>
          <p>{countryData.currencies}</p>
        </span>
        <span>
          <h3>Languages:</h3>
          <p>{countryData.languages}</p>
        </span>
        <span>
          <h3>Continent:</h3>
          <p>{countryData.continent}</p>
        </span>
        <span>
          <h3>Population:</h3>
          <p>{countryData.population}</p>
        </span>
        <span>
          <h3>Map:</h3>
          <a href={countryData.googlemaps}>Google Maps</a>
        </span>
        <span>
          <h3>Area:</h3>
          <p>
            {countryData.area} km<sup>2</sup>
          </p>
        </span>
        {showFullInfo === true ? (
          <h3
            className="h3-link"
            onClick={() => {
              hideFullView();
              updateFullInfoData(false);
            }}
          >
            Less Details...
          </h3>
        ) : (
          <h3
            className="h3-link"
            onClick={() => {
              updateFullInfoData(true);
            }}
          >
            More Details...
          </h3>
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
