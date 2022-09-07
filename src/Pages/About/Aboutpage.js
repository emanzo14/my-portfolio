import AnimatedLetters from "../../components/AnimatedLetters/Letters";
import "./Aboutpage.scss";
import { useState, useEffect } from "react";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aboutpage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, [letterClass]);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
            idx={15}
          />
        </h1>
        <p>
          I'm a very ambitious full-stack developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          Once a very established carpenter and wood worker I have an extreme
          passion for designing and creating and bringing that passion and
          skills to web development industry.
        </p>

        <h2>Timeline</h2>

        <div className="table">
          <div className="year">
            <p>1994</p>
          </div>
          <div>
            <p>Born in New Jersey</p>
          </div>
          <div className="year">
            <p>2012</p>
          </div>
          <div>
            <p>Graduated from Clearview Regional Highschool</p>
          </div>
          <div className="year">
            <p>2013</p>
          </div>
          <div>
            <p>Attended Rowan University</p>
          </div>
          <div className="year">
            <p>2017</p>
          </div>
          <div>
            <p>
              Started <span className="bold">Fine Edge Construction</span>, a
              full service construction company to handle any type of home
              remodling
            </p>
          </div>
          <div className="year">
            <p>2022</p>
          </div>
          <div>
            <p>
              Graduated from General Assembly, with a certificate in Full Stack
              Web Development.
            </p>
          </div>
        </div>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faPython} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
