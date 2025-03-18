import "./App.css";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import Card from "./Components/Card/Card";
import { useState, useEffect } from "react";
import CardDetails from "./Components/Card/CardDetails/CardDetails";

function App() {
  const [star, setStar] = useState([]);

  useEffect(() => {
    fetchStars();
  }, []);

  const fetchStars = async () => {
    let res = await fetch("http://localhost:3000/posts");
    //always convert to json
    let data = await res.json();
    setStar(data);
    console.log(data);
  };
  return (
    <div className="body">
      <Header />
      <Landing />
      <Card star={star}/>
      <CardDetails  selectedStar={star}/>
    </div>
  );
}

export default App;
