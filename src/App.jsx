import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobList from "./pages/JobList";
import AddJob from "./pages/AddJob";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/add" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
