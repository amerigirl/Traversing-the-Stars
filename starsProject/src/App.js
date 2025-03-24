import "./App.css";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import Card from "./Components/Card/Card";
import { useState, useEffect } from "react";
import Suggestion from "./Components/Suggestion/Suggestion";

// The App component is the root component of the application. It is responsible for rendering the Header, Landing, Card, and Suggestion components. It also fetches the list of stars from the server and passes the list of stars to the Card component for rendering.


function App() {
  const [stars, setStars] = useState([]);

  /*
  useEffect is a hook that runs after the first render of the component to fetch the stars from the json file.
  */

  useEffect(() => {
    fetchStars();
  }, []);

  const fetchStars = async () => {
    let res = await fetch("http://localhost:3000/posts");
    //always convert to json
    let data = await res.json();
    setStars(data);
  };


  const postSuggestion = async () => {
    
  }

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
