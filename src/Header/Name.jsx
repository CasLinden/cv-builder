import Submit from "../hooks/Submit"

export default function Name({ me, editMe }) {
  
  const contentEditableRef = Submit((value) => {
    editMe("name", value)
  });


  return (
      <h1 contentEditable ref={contentEditableRef}>{me.name}</h1>
  )
} 