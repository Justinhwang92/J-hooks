import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// use useClick, create the reference 
const useClick = (onClick) => {
  if(typeof onClick !== "function"){
    return;
  }
  const element = useRef();
  useEffect(() => {
    // when componentDidMount and componentDidUpdate, it adds the event
    if(element.current){
      element.current.addEventListener("click", onClick);
    }
    // when componentWillUnMount, clean up the eventListner
    return () => {
      if (element.current){
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []); // adding [] dependency makes sure to excecute first if block only once when componentDidMount
          // if don't add [], it will excecute forever
  return element;
}

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1> 
      
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
