import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Login, Signup, Logout, NotFound, Feeds } from "./Pages/Index";
import {Footer, FeedFooter} from "./Components/Index"

function App() {

  const {pathname} = useLocation()

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {pathname === "/feeds" ? <FeedFooter /> : <Footer />}
    </div>
  );
}

export default App;
