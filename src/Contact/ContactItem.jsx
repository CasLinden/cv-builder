import Submit from "../hooks/Submit";

export default function Phone({ me, editMe, content, icon}) {

  const contentEditableRef = Submit((value) => {
    editMe(content, value);
  });

  return (
    <div className="contact-item">
      <div className="icon-container"><img src={icon} alt={`${content} icon`} /></div>
      <div contentEditable ref={contentEditableRef} onSubmit={editMe}>
        {me[content]}
      </div>
    </div>
  );
}
