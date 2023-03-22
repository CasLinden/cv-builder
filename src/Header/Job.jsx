import Submit from "../hooks/Submit";

export default function Job({ me, editMe }) {
  
  const contentEditableRef = Submit((value) => {
    editMe("job", value)
  });

  return (
      <h2 contentEditable ref={contentEditableRef} onSubmit={editMe}>{me.job}</h2>
  )
} 