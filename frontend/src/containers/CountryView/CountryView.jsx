import React from "react";
import { CountryInfo, FullCountryInfo } from "../../components";
import "./countryView.css";

import { useFullInfoData } from "../../components/Context/FullInfoContext";

/* Container for showing country info once data has been received */

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
