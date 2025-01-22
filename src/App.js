import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Works from "./Components/pages/Works";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home";
import NavBar from "./Components/helpers/NavBar";
import PolicySupport from "./Components/pages/PolicySupport";
import CollectionPage from "./Components/helpers/CollectionPage";
import AccessibilityMenu from "./Components/helpers/AccessibilityMenu";

const App = () => {
  return (
    <Router>
      <NavBar />
      <AccessibilityMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/collections/:label" element={<CollectionPage />} />
        <Route path="/PolicySupport" element={<PolicySupport />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
