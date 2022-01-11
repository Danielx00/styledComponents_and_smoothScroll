import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
      </Router>
    </>
  );
}

export default App;
