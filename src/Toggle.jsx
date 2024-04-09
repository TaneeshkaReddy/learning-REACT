import {useState} from "react";
import "./Toggle.css";

export default function Toggle(){
  const [heartFace,setHeartFace]=useState(true);
  // arrow func:
  const toggleEmoji=()=>setHeartFace(!heartFace);
  return <p className="Toggle" onClick={toggleEmoji}>
    {heartFace?"😍":"😒"}
    </p>

}