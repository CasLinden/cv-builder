export default function RandoButton({user}){

  function logMe() {
    console.log(user)
  }

  return (
    <button onClick={logMe}>Log user object</button>
  )
}

