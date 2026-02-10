import React from "react";
import { Route, Routes } from "react-router-dom";
import Createpost from "./pages/Createpost";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<Createpost/>} />

      </Routes>
    </div>
  );
};

export default App;
