import { createContext, useState, useEffect } from "react";
import { defaultData } from "./defaultData";
const CvDataContext = createContext();

function CvDataProvider({ children }) {
  const [cvData, setCvData] = useState(() => {
    const storedData = localStorage.getItem("cvData");
    return storedData // If there is data in local storage, use it
      ? JSON.parse(storedData) // If there is no data in local storage, use the default data below
      : defaultData
  });

  useEffect(() => {
    
    localStorage.setItem("cvData", JSON.stringify(cvData));
  }, [cvData]);
  
  return (
    <CvDataContext.Provider value={{ cvData, setCvData }}>
      {children}
    </CvDataContext.Provider>
  );
}

export { CvDataContext, CvDataProvider };
