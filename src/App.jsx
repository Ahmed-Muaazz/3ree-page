import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhoWeAre from "./pages/who we are/WhoWeAre";
import WhatWillYouGet from "./pages/what will you get/WhatWillYouGet";
import WhatWeNeedFromYou from "./pages/what  we need from you/what_we_need";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WhoWeAre />} />
          <Route
            path="/what-we-need-from-you"
            element={<WhatWeNeedFromYou />}
          />
          <Route path="/what-will-you-get" element={<WhatWillYouGet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
