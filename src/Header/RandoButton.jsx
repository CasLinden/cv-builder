export default function RandoButton({me}){

  function logMe() {
    console.log(me)
  }

  return (
    <button onClick={logMe}>Check user object</button>
  )
}

