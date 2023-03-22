import Name from "./Name"
import Job from "./Job"

export default function Header({ me, editMe }) {
  
  return (
    <div className="header">
      <Name me={me} editMe={editMe}></Name>
      <Job me={me} editMe={editMe}></Job>
    </div>
  )
}