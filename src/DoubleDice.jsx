export default function DoubleDice(){
  const nums1=Math.floor(Math.random()*3)+1;
  const nums2=Math.floor(Math.random()*3)+1;
  // const result=nums1===nums2?"You Win":"You Lose"
  //const styles={color:"cyan",fontSize:"13px"}; //css written in object format in key value format
  const isWinner= nums1===nums2;
  const styles={color:isWinner?"green":"red",fontSize:"13px"}; 
  return (
    <div>
      {/* <h2>{result}</h2> */}
      {/* <h2>{nums1 === nums2 ? "You Win":"You Lose:"}</h2> */}
      {/* {nums1 === nums2 ?<h3>"You Win"</h3> :null} */}
      <div className="DoubleDice" style={styles}>
      {isWinner && <h3>"You Win"</h3>}
      <p>Num1: {nums1}</p>
      <p>Num2: {nums2}</p>
      </div>

    </div>
  )

}