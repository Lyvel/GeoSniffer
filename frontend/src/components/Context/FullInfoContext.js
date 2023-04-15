import React, { useContext, useState } from "react";

const FullInfoContext = React.createContext();
const UpdateFullInfoContext = React.createContext();

export const useFullInfoData = () => useContext(FullInfoContext);
export const useUpdateFullInfoData = () => useContext(UpdateFullInfoContext);

/* Keeps track off whether the user has clicked to display more details */

export const FullInfoProvider = ({ value, children }) => {
  const [fullInfoData, setfullInfo] = useState(value);
  return (
    <FullInfoContext.Provider value={fullInfoData}>
      <UpdateFullInfoContext.Provider value={setfullInfo}>
        {children}
      </UpdateFullInfoContext.Provider>
    </FullInfoContext.Provider>
  );
};
