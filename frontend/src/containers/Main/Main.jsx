import React from "react";
import "./main.css";

import { CountrySearch } from "../../components";
import { CountryView } from "../../containers";

import { useCountryData } from "../../components/Context/CountryContext";

/* Main container for the App. */

const Main = () => {
  const countryData = useCountryData();
  return (
    <div>
      <CountrySearch />
      {countryData !== "" && countryData !== "404" && <CountryView />}
    </div>
  );
};

export default Main;
