import Submit from "../hooks/Submit";

export default function Age({ me, editMe }) {
  const contentEditableRef = Submit((value) => {
    editMe("age", value);
  });

  return (
    <div className="age" contentEditable ref={contentEditableRef} onSubmit={editMe}>
      Age: {me.age}
    </div>
  );
}
