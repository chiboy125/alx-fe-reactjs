import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import BlogPost from "./pages/BlogPost";

// Simulated authentication
const isAuthenticated = false; // change to true to allow access

function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Blog Post 1</Link>
      </nav>

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested routes under profile */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Catch all */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
