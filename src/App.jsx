import './App.css'
import Dogs from"./Dogs";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from './ColorList';
import ShoppingCart from './ShoppingCart';
import Clicker from './Clicker';
import Form from './Form';
import Counter from "./Counter";
import Toggle from "./Toggle";
import ToggleCounter from "./ToggleCounter";

// const itemss=[
//   {item:"Milk",quantity:2,added:false},
//   {item:"Curd",quantity:3,added:true},
//   {item:"Active Dry Yeast",quantity:1,added:false},
//   {item:"Cocoa Powder",quantity:2,added:false},
// ];

//adding id for key
const itemss=[
  {id:1,item:"Milk",quantity:2,added:false},
  {id:1,item:"Curd",quantity:3,added:true},
  {id:1,item:"Active Dry Yeast",quantity:1,added:false},
  {id:1,item:"Cocoa Powder",quantity:2,added:false},
];





function App() {
  return <div>
    <Heading color="magenta" text="REACT"></Heading>
    <Heading color="magenta" text="Practise Makes Perfect"></Heading>
    <hr></hr>

    <h1>GREETER COMPONENT</h1>
    <Greeter person="Tan" from="Ed Sheeran"></Greeter>
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
   <hr></hr>

   <h1>SHOPPING CART COMPONENT</h1>
   <ShoppingCart items={itemss}></ShoppingCart>
   <hr />


   <h1>CLICKER (EVENT) COMPONENT</h1>
   <Clicker message="HII" buttonText="dont click"></Clicker>
   <hr />

   <h1>VERY BASIC FORM COMPONENT- JUST FOR SUBMISSION</h1>
   <Form></Form>
   <hr />

   <h1>COUNTER COMPONENT (INTRO TO REACT STATES) </h1>
   <Counter></Counter>
   <hr />
   
   <h1>TOGGLE COMPONENT (INTRO TO REACT STATES) </h1>
   <Toggle></Toggle>
   <hr />

   <h1>TOGGLECounter COMPONENT (INTRO TO REACT STATES) </h1>
   <ToggleCounter></ToggleCounter>
   <hr />
    

     
  </div>
}

export default App;
