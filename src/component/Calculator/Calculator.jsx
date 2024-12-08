import { useState, useEffect } from "react";
import "./style/style.css";
import img2 from "./assets/img.png";

function Calculator() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(null);

  useEffect(() => {
    if (birthdate) {
      runCalculator();
    }
  });

  const runCalculator = () => {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
  };
  const handleChange = (event) => {
    setBirthdate(event.target.value);
  };
  return (
    <section id="age">
      <div className="title-head">
        <img src={img2} alt="Img2" className="img" />
        <h1 className="title">AGE CALCULATOR</h1>
      </div>
      <div className="form">
        <input
          type="date"
          value={birthdate}
          onChange={handleChange}
          className="input"
          max={new Date().toISOString().split("T")[0]}
        />
      </div>

      {age !== null && (
        <p className="result">Result : Your Age Is {age} Years Old</p>
      )}
      {birthdate && age === null && (
        <p className="error">Please Enter Valid Birthdate</p>
      )}
    </section>
  );
}

export default Calculator;
