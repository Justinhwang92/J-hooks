import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


const App = () => {
  const sayHello = () => console.log("hello");
  //useEffect(sayHello);
  // same as above
  // useEffect(()=>{
  //   sayHello();
  // })
  const [number, setNumber] = useState(0);
  const [aNumber,setAnumber] = useState(0);
  useEffect(sayHello, [number]); // useEffect excutes only when number chnages
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={()=> setNumber(number + 1)}>{number}</button>
      <button onClick={()=> setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
