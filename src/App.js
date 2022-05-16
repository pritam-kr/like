import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom";
import {
  Login,
  Signup,
  Logout,
  NotFound,
  Feeds,
  Profile,
  MockAPI,UserProfile, Bookmark , SinglePost, Explore
} from "./Pages/Index";
import { Footer, FeedFooter, ScrollTop } from "./Components/Index";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { PrivateRoute } from "./Router/PrivateRoute/PrivateRoute";
import {Uploadjs} from "./Pages/Uploadjs"
 
 

function App() {
  const { pathname } = useLocation();
  const state = useSelector((state) => state);
  const { auth:{token} } = state;
    
  
  
  return (
    <div className="App">
      <Toaster />
       
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/feeds" element={<PrivateRoute><Feeds /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mock" element={<MockAPI />} />
          <Route path="/bookmark" element={<PrivateRoute><Bookmark /></PrivateRoute>} />
          <Route path="/post/:postid" element={<PrivateRoute><SinglePost /></PrivateRoute>} />
          <Route path="/profile/:username" element={<PrivateRoute><UserProfile /></PrivateRoute>}  />
          <Route path="/explore" element={<PrivateRoute ><Explore /></PrivateRoute>} />
          <Route path="/up" element={<PrivateRoute ><Uploadjs /></PrivateRoute>} />
        </Routes>
     
      {pathname === "/feeds" || pathname === "/profile" ? (
        <FeedFooter />
      ) : (
        <Footer />
      )}
    </div>
  );
}

export default App;
