import "./style/style.css";
import Img1 from "./assets/img.png";

function Landing() {
  const linkToCalculator = "../Calculator";
  const toCalculator = () => {
    window.location.href = linkToCalculator;
  };
  return (
    <section id="home">
      <div className="con-img">
        <img src={Img1} alt="Img1" className="img" />
      </div>
      <div className="content">
        <h1>AGE CALCULATOR</h1>
        <p>Age calculator for free by Venorg</p>
        <button className="btn" onClick={toCalculator}>
          CALCULATOR
        </button>
      </div>
    </section>
  );
}

export default Landing;
