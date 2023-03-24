import Submit from "../hooks/Submit";

export default function Profile({ me, editMe }) {
  const contentEditableRef = Submit((value) => {
    editMe("profile", value);
  });

  return (
    <div className="profile">
      <h3>PROFILE</h3>
      <p contentEditable ref={contentEditableRef}>
        {me.profile}
      </p>
    </div>
  );
}
