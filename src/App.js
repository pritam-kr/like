import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Index";
import {Footer} from "./Components/Index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
