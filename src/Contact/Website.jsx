import Submit from "../hooks/Submit";

export default function Website({ me, editMe }) {
  const contentEditableRef = Submit((value) => {
    editMe("website", value);
  });

  return (
    <div contentEditable ref={contentEditableRef} onSubmit={editMe}>
      {me.website}
    </div>
  );
}
