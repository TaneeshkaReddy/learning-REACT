export default function ListPicker({values}){
  const randIdx=Math.floor(Math.random()*values.length)
  const randElement=values[randIdx]
  return (
    <div>
    <p>The array list values are: {values}</p>
    <p>The Random Element is :{randElement}</p>
    </div>
  );
}