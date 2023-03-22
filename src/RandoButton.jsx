export default function RandoButton({me}){

  function logMe() {
    console.log(me)
  }

  return (
    <button onClick={logMe}>Log user object</button>
  )
}

