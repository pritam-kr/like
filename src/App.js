import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Signup, Logout, NotFound } from "./Pages/Index";
import {Footer} from "./Components/Index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
