import Submit from "../hooks/Submit";

export default function Phone({ me, editMe }) {
  const contentEditableRef = Submit((value) => {
    editMe("phone", value);
  });

  return (
    <div contentEditable ref={contentEditableRef} onSubmit={editMe}>
      {me.phone}
    </div>
  )
}
