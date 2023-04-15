import React from "react";
import { CountryInfo, FullCountryInfo } from "../../components";
import "./countryView.css";

import { useFullInfoData } from "../../components/Context/FullInfoContext";

const CountryView = () => {
  const showFullInfo = useFullInfoData();
  return (
    <div className="countryView fadeIn" id="countryView">
      {showFullInfo === true && (
        <>
          <FullCountryInfo />
        </>
      )}
      <CountryInfo />
    </div>
  );
};

export default CountryView;
