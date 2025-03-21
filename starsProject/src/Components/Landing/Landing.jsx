import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landingContainer">
      <div>
        <img className="img" src="../../../rocketship.jpg" />
      </div>

      <div className="landingText">
        One of the best things about being on planet Earth is that we can, on a
        clear night, see past our planet and into the stars. But often when we
        look up, the stars seem like beautiful bright dots that are in one big
        jumble called the sky. Some people can make sense of the stars; they can
        find constellations as quick as we can find cars on the street. Most of
        us however, don’t really have a clue.
        <br></br>
        <br></br>
        Traversing the stars aims to create a space where a user can learn about
        the major constellations we see as we gaze beyond Earth’s borders. Here,
        you can learn about the constellation, it’s nickname, the history and so
        much more.
        <br></br>
        <br></br>
        Click below to learn about one of the top 10
        constellations in our solar system! If you want suggest a new constellation, <strong> scroll to the bottom of the page</strong> and add your constellation suggestion below!
      </div>
    </div>
  );
};

export default Landing;
