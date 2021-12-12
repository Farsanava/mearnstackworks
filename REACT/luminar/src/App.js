
import './App.css';
import Random from './Random';
import Component from './Component';
import './Random.css'
import {useState} from 'react'

function App() {
  const name="how are you??"     // variables are initialized b/n func and return
  const name1=['abc','123']

  // const details=[
  //   {name:'sanu',age:'22'},
  //   {name:'shabi',age:'29'},
  //   {name:'farshabi',age:'25'},
  // ]
   
  // const [initailState,setState]=useState(1)
  // const [number,setNumber]=useState(1)
  // function increement(){
  //   setNumber(number+1)
  // }
  return (
    <div className="App">
      {/* <Random/>
      <Component/>

       <h1>{name}</h1>           */}
       {/* print the varible using{} */}
       {/* <h1>{name1}</h1> */}

      {/* jsx must started with {} */}
       {/* {details.map(item=>(        
         <div  className="main">
         <h1>{item.name}</h1>
         <h4>{item.age}</h4>
         </div>
       ))} */}

       {/* <p>{initailState}</p> */}
       {/* <p>{number}</p>
      <button onClick={increement}>INCREMENT</button><br></br> */}
      {/* inline */}
      {/* <button  onClick={()=> setNumber(number-1)}>
        DECREMENT
      </button><br></br>
      <button  onClick={()=> setNumber(0)}>
        RESET
      </button> */}
       <Random value={name}/>
       <Random item={name1}/>
    </div>
  );
}
 
export default App;
