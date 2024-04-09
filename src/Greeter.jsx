// export default function Greeter(props){ 
  // OR YOU DESTRUCTURE LIKE BELOW
export default function Greeter({person="everyone",from="secret admirer"}){
  // console.log(props.person);
  // return <h1>Hi!! {props.person} I am a greeter</h1>
  return <div>
    
  <h2>Hi!! {person},How are you</h2>
  <h3>-{from}</h3>
  </div>
}
