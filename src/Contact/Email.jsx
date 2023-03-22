import Submit from "../hooks/Submit";

export default function Email({ me, editMe }) {
  const contentEditableRef = Submit((value) => {
    editMe("email", value);
  });

  return (
    <div contentEditable ref={contentEditableRef} onSubmit={editMe}>
      {me.email}
    </div>
  );
}
