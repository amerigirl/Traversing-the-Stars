import "./App.css";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import Card from "./Components/Card/Card";
import { useState, useEffect } from "react";

function App() {
  const [stars, setStar] = useState([]);


  useEffect(() => {
    fetchStars();
  }, []);

  const fetchStars = async () => {
    let res = await fetch("http://localhost:3000/posts");
    //always convert to json
    let data = await res.json();
    setStar(data);
  };
  return (
    <div className="body">
      <Header />
      <Landing />
      <Card stars={stars} />
    </div>
  );
}

export default App;
