import { useContext } from "react";
import { CvDataContext } from "/src/contexts/CvDataContext";
import { defaultData } from "../defaultData";
import { v4 as uuidv4 } from "uuid";

const addRemove = (type, index) => {
  const { cvData, setCvData } = useContext(CvDataContext);
  return {
    add: (type) => {
      const allItems = cvData[type].slice();
      const newItem = { ...defaultData[type][0] };
      newItem.key = uuidv4();
      allItems.push(newItem);
      setCvData((prevData) => ({
        ...prevData,
        [type]: allItems,
      }));
    },
    remove: (type, index) => {
      const allItems = cvData[type].slice();
      allItems.splice(index, 1);
      setCvData((prevData) => ({ ...prevData, [type]: allItems }));
    },
  };
};

export { addRemove };
