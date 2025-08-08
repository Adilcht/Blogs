import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllArticles from "./pages/AllArticles";
import Publish from "./pages/Publish";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
