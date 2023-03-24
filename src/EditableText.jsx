import { useContext } from "react";
import { CvDataContext } from "./CvDataContext";
import useSubmit from "./hooks/useSubmit";

function EditableText({field, component }) {
  const { cvData, setCvData } = useContext(CvDataContext);

  const handleFieldSubmit = (value) => {
    setCvData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const { ref, handleKeyPress } = useSubmit(handleFieldSubmit);

  const contentEditableElement = component({
    contentEditable: true,
    ref: ref,
    onKeyDown: handleKeyPress,
    suppressContentEditableWarning: true,
    children: cvData[field],
  });

  return (
    <div>
      {contentEditableElement}
    </div>
  );
}

export default EditableText;
