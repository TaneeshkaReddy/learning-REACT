export default function Die({numsides}){
  const roll=Math.floor(Math.random()*numsides)+1;
  return (
    <div>
      
  <p>Die Roll : {roll}</p>
  </div>
  )
}