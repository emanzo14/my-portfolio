import AnimatedLetters from "../../components/AnimatedLetters/Letters";
import "./Aboutpage.scss";

const Aboutpage = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          malesuada ligula id risus malesuada placerat. Praesent ac condimentum
          ipsum, ut feugiat quam. Fusce dictum urna sed ultricies gravida.
          Aliquam placerat tempor justo sed lobortis. Duis semper pretium
          malesuada.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          malesuada ligula id risus malesuada placerat. Praesent ac condimentum
          ipsum, ut feugiat quam. Fusce dictum urna sed ultricies gravida.
          Aliquam placerat tempor justo sed lobortis. Duis semper pretium
          malesuada.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          malesuada ligula id risus malesuada placerat. Praesent ac condimentum
          ipsum, ut feugiat quam. Fusce dictum urna sed ultricies gravida.
          Aliquam placerat tempor justo sed lobortis. Duis semper pretium
          malesuada.
        </p>
      </div>
    </div>
  );
};

export default Aboutpage;
