import Submit from "../hooks/Submit";
import defaultValues from "../defaultvalues";

export default function WorkItem({ me, editMe, i, content }) {
  const contentEditableRef = Submit((value) => {
    editMe(content, value);
  });

  return (
    <div className="work-item">
      <h4
        className="job-title"
        content="job-title"
        contentEditable
        ref={contentEditableRef}
      >
        {me.jobTitle || defaultValues.workExperience.jobTitle}
      </h4>
      <h5
        className="company-name"
        content="company name"
        contentEditable
        ref={contentEditableRef}
      >
        {me.companyName || defaultValues.workExperience.companyName}
      </h5>
      <span
        className="period"
        content="period"
        contentEditable
        ref={contentEditableRef}
      >
        {me.period || defaultValues.workExperience.period}
      </span>
      <p
        className="job-description"
        content="job-description"
        contentEditable
        ref={contentEditableRef}
      >
        {me.jobDescription || defaultValues.workExperience.jobDescription}
      </p>
    </div>
  );
}

