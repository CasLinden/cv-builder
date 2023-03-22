import Submit from "../hooks/Submit";

export default function Github({ me, editMe }) {
  const contentEditableRef = Submit((value) => {
    editMe("github", value);
  });

  return (
    <div contentEditable ref={contentEditableRef} onSubmit={editMe}>
      {me.github}
    </div>
  );
}
