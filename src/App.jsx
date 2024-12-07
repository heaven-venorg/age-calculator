import { BrowserRouter as Router, Routes, Route } from "react-router";
import Landing from "./Landing/Landing";
import Calculator from "./Calculator/Calculator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
