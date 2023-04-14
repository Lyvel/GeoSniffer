import React from "react";
import "./main.css";

import { CountrySearch } from "../../components";
import { CountryView } from "../../containers";

import { useCountryData } from "../../components/Context/CountryContext";

const Main = () => {
  const countryData = useCountryData();
  return (
    <div>
      <CountrySearch />
      {/*Checks wether there is any country data or if its not errored out.
         If there is data and not an error, it will display the country view container*/}
      {countryData !== "" && countryData !== "404" && <CountryView />}
    </div>
  );
};

export default Main;
