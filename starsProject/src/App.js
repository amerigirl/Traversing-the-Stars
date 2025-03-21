import "./App.css";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import Card from "./Components/Card/Card";
import { useState, useEffect } from "react";
import Suggestion from "./Components/Suggestion/Suggestion";

function App() {
  const [stars, setStars] = useState([]);


  useEffect(() => {
    fetchStars();
  }, []);

  const fetchStars = async () => {
    let res = await fetch("http://localhost:3000/posts");
    //always convert to json
    let data = await res.json();
    setStars(data);
  };
  return (
    <div className="body">
      <Header />
      <Landing />
      <Card stars={stars} />
      <Suggestion />
      
    </div>
  );
}

export default App;
