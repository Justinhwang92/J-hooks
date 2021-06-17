import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;

        // validate function
        let willUpdate = true;
        if(typeof validator === "function") {
            willUpdate = validator(value);
        }
        if(willUpdate) {
            setValue(value);
        }
        
    }
    return { value, onChange };
}

const App = () => {
    // limit how many words can be entered in the input box
    // if the length of the value is <= 10 then true
    const maxLen = (value) => value.length <= 10; 
    // Don't allow to enter @ in the input box
    // const maxLen = (value) => value.includes("@");
    const name = useInput("Mr.", maxLen);
    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" {...name} />
            {/* ...name is equal to value={ name.value } onChange ={ name.onChange } */}
            {/* ...name unpack everything in the name */}
        </div>
    );
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
