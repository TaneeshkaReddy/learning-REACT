import ShoppingCartItem from "./ShoppingCartItem";

//Before adding key
// function ShoppingCart({items}){
//   return (
//     <div>
//       {items.map(i=> (
//       <li 
//       style={{
//         color:i.added?"grey":"white",
//         textDecoration:i.added?"line-through":"none"
//         }}>
//         {i.item} - {i.quantity}
//         </li>
//       ))}
//     </div>
//   )
// }


//after adding key
function ShoppingCart({items}){
  return (
    <div>
      {items.map(i=> (
      <ShoppingCartItem key={i.id} {...i}></ShoppingCartItem> //using spread operator
      //or
      // <ShoppingCartItem key={i.id} item={i.item} quantity={i.quantity} added={i.added}></ShoppingCartItem>
      ))}


    </div>
  )

}

export default ShoppingCart;




