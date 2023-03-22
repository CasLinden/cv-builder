import Submit from "../hooks/Submit";

export default function Address({ me, editMe }) {
  const contentEditableRef = Submit((value) => {
    editMe("address", value);
  });

  return (
    <div contentEditable ref={contentEditableRef} onSubmit={editMe}>
      {me.address}
    </div>
  );
}
