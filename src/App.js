import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Login, Signup, Logout, NotFound, Feeds, Profile, MockAPI } from "./Pages/Index";
import { Footer, FeedFooter, ScrollTop } from "./Components/Index";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function App() {
  const { pathname } = useLocation();

  const state = useSelector((state) => state);
  const { auth } = state;
  const token = auth.token;

  return (
    <div className="App">
      <Toaster />
      <ScrollTop>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mock" element={<MockAPI />} />
        </Routes>
      </ScrollTop>
      {pathname === "/feeds" || pathname === "/profile" ? (
        <FeedFooter />
      ) : (
        <Footer />
      )}
    </div>
  );
}

export default App;
