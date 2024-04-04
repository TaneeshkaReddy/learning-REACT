import './App.css'
import Dogs from"./Dogs";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from './ColorList';

function App() {
  return <div>
    <Heading color="magenta" text="REACT"></Heading>
    <Heading color="magenta" text="Practise Makes Perfect"></Heading>
    <hr></hr>

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
    <hr></hr>
    
   <h1>DOUBLEDICE COMPONENT</h1>
   <DoubleDice></DoubleDice>
   <hr></hr>

   <h1>COLORLIST COMPONENT</h1>
   <ColorList colours={["red","pink","teal"]}></ColorList>
   <ColorList colours={["purple","orange","violet"]}></ColorList>

    

     
  </div>
}

export default App
