// 1. putting all in array called elements and just calling that
// export default function ColorList({colours}){
//   const elements=[<p>Hello!</p>,<h1>Bye!</h1>,<input type="password"></input>]
//   return (
//     <div>
//       <p><h1>Color List</h1></p>
//       {elements}
//       {colours}
//      </div>
//   );
// }


//or 2. mapping over each element of colours and storing in listelements
// export default function ColorList({colours}){
//   const listelements=colours.map(colour=><li>{colour}</li>);
//   return (
//     <div>
//       <p><h1>Color List</h1></p>
//      {listelements}
//     </div>
//   );
// }


//or 3. 
export default function ColorList({colours}){
  return (
    <div>
      <p><h3>Color List</h3></p>
      <ul>
      {colours.map(c=>(
      <li style={{color:c}}>{c}</li>
      ))}
      </ul>
    </div>
  );
}



