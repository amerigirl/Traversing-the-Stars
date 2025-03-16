import React from "react";
import "./Button.css";
import { useEffect, useState } from "react";

const Button = () => {
const [star, getStar] = useState([])

  useEffect(() => {
    fetchStars();
  },[]);



  const fetchStars = async () => {
    let res = await fetch("http://localhost:3000/posts");
    //always convert to json
    let data = await res.json();

    console.log(data);
  };

  return (
    <div className="my-button">
      <button className="btn">Sample Text</button>
    </div>
  );
};

export default Button;
