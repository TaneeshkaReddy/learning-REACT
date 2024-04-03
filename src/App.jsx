import './App.css'
import Dogs from"./Dogs";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";

function App() {
  return <div>
    <h1>GREETER COMPONENT</h1>
    <Greeter person="TanTanaTan" from="Ed Sheeran"></Greeter>
    <hr></hr>
     <h1>DIE COMPONENT</h1>
    <Die numsides={20} />
    {20} : to pass it as int, "20" to pass it as string
     <Die numsides={6} />
    <Die numsides={15} />
     <hr></hr>
    <h1>ARRAYLIST COMPONENT</h1>
    <ListPicker values={[1,2,3]}></ListPicker>
    <ListPicker values={["a","b","c"]}></ListPicker>
    {/* <ListPicker values={{a:2,b:3}}></ListPicker>  JS OBJECT CAN BE PASSED LIKE THIS  */}


   <h1>DOUBLEDICE COMPONENT</h1>
   <DoubleDice></DoubleDice>

    

     
  </div>
}

export default App
