import WorkItem from "./Workitem";
import { useState } from "react";
import defaultValues from "../defaultvalues";

export default function WorkExperience({ me, editMe }) {
  const [workExperience, setWorkExperience] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    return storedUser.workExperience || defaultValues.workExperience;
  });

  return (
    <div className="work-experience">
      <h3>WORK EXPERIENCE</h3>
      <WorkItem me={workExperience[0]} editMe={editMe} i={0}></WorkItem>
    </div>
  );
}
