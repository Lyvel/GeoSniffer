import React, { useContext, useState } from "react";

const CountryContext = React.createContext();
const UpdateCountryContext = React.createContext();

export const useCountryData = () => useContext(CountryContext);
export const useUpdateCountryData = () => useContext(UpdateCountryContext);

export const CountryProvider = ({ value, children }) => {
  const [countryData, setCountryData] = useState(value);
  return (
    <CountryContext.Provider value={countryData}>
      <UpdateCountryContext.Provider value={setCountryData}>
        {children}
      </UpdateCountryContext.Provider>
    </CountryContext.Provider>
  );
};
