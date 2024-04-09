import {useState} from "react";

export default function Counter(){
  // const arr=useState(5);
  // console.log(arr);

  const [num,setNum]=useState(5);// 5 is used only on initial render.
  function changeNum() {
    setNum(num+1);
  }
  
  return (
    <div>
      <p>The count is:{num}</p>
      <button onClick={changeNum}>Click me to increment</button>
    </div>
  )

}