import React, { createContext, useEffect, useRef, useState } from "react";

function Input(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef("");
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value)
  };
  return (
      <input
        className={props.className}
        name={props.name}
        value={input}
        placeholder={props.placeholder}
        onChange={handleChange}
        ref={inputRef}
      />
    );
}

export default Input;
