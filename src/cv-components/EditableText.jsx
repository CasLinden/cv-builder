import { useContext } from "react";
import { CvDataContext } from "../CvDataContext";
import useSubmit from "../hooks/useSubmit";

function EditableText({ field, component, index = null, nestedField = null }) {
  const { cvData, setCvData } = useContext(CvDataContext);

  const handleFieldSubmit = (value) => {
    setCvData((prevData) => {
      if (nestedField !== null && index !== null) {
        // Handle nested properties, work experience and education
        return {
          ...prevData,
          [field]: prevData[field].map((item, i) => {
            if (i === index) {
              return {
                ...item,
                [nestedField]: value,
              };
            }
            return item;
          }),
        };
      } else {
        // Handle non-nested properties
        return {
          ...prevData,
          [field]: value,
        };
      }
    });
  };

  const { ref, handleKeyPress } = useSubmit(handleFieldSubmit);

  const contentEditableElement = component({
    contentEditable: true,
    ref: ref,
    onKeyDown: handleKeyPress,
    suppressContentEditableWarning: true,
    children: nestedField
      ? cvData[field][index][nestedField]
      : cvData[field],
  });

  return <>{contentEditableElement}</>;
}

export default EditableText;