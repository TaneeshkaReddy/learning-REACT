//in normal JS events:
// const btn=documnet.querySelector("button")
//btn.addEventListener("click",function(){})

//but in REACT:

function handleClick(){
   console.log("i clicked");
}

function handleHover(){
  console.log("I AM HOVERING")
}

// export default function Clicker(){
//   return (
//     <div>
//       <p>Click the button</p>
//       <button onClick={handleClick}>Click</button>

//       <p onMouseEnter={handleHover}>Hover ON ME</p>
      
//     </div>
//   )
// }

export default function Clicker({message,buttonText}){
  const handleClick= () =>{
    alert(message);
  }
  return (
    <div>
      {/* method 1 using arrow function */}
      {/* <button onClick={()=>alert(message)}>{buttonText}</button> */}

      {/* method 2 */}
      <button onClick={handleClick}> {buttonText}</button> 

    </div>

  )

}

//IMPORTANT:
// if I do handleClick() - it will execute immediately no matter where
// so even if i dont click button, it will be executed
// if I do handleClick - only works for some event