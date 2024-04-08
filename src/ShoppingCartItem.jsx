function ShoppingCartItem({id,item,quantity,added}){
  const styles={color:added?"grey":"white",textDecoration:added?"line-through":"none"};
  return (
    <div>
  <li style={styles}>{item}-{quantity}</li>
  </div>
  );

}

export default ShoppingCartItem;

{/* <li key={i.id}
      style={{
        color:i.added?"grey":"white",
        textDecoration:i.added?"line-through":"none"
        }}>
        {i.item} - {i.quantity}
        </li> */}