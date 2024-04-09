import {useState} from "react";
import "./Toggle.css";

export default function ToggleCounter(){
  const [heartFace,setHeartFace]=useState(true);
  const [num,setNum]=useState(0);

  function changeNum() {
    setNum(num+1);
  }
  const toggleEmoji=()=>setHeartFace(!heartFace);

  return (
    <div>
  <p className="Toggle" onClick={toggleEmoji}>
    {heartFace?"😍":"😒"}
    </p>

    <p>{num}</p>
    <button onClick={changeNum}>+</button>
    </div> 
  )

}