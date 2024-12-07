import "./style/style.css";
import img3 from "./assets/notfound.webp";

function Notfound() {
  return (
    <section id="notfound">
      <img src={img3} alt="notFound" className="img" />
    </section>
  );
}

export default Notfound;
