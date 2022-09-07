import "./Homepage.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimatedLetters from "../../components/AnimatedLetters/Letters";

const Homepage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    "I'",
    "m",
    "",
    "E",
    "d",
    "g",
    "i",
    "e",
    " ",
    "M",
    "a",
    "n",
    "z",
    "o",
  ];
  const jobArray = [
    "a",
    "",
    "F",
    "u",
    "l",
    "l",
    "",
    "S",
    "t",
    "a",
    "c",
    "k",
    "",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, [letterClass]);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={10}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={14}
          />
        </h1>
        <h2>Software Engineer / Developer / Designer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
