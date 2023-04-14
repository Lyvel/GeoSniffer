import React from "react";
import { CountryProvider } from "./components/Context/CountryContext";
import { FullInfoProvider } from "./components/Context/FullInfoContext";
import { Main } from "./containers/";

function App() {
  return (
    <CountryProvider value="">
      <FullInfoProvider value="false">
        <Main />
      </FullInfoProvider>
    </CountryProvider>
  );
}

export default App;
