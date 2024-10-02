import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobList from "./pages/JobList";
import AddJob from "./pages/AddJob";
import Header from "./Components/Header";
import { setError, setJobs, setLoading } from "./redux/slices/jobSlice";
import { useDispatch } from "react-redux";
import api from "./utilities/api";
const App = () => {
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(setLoading());

    api
      .get("/jobs")
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList retry={getData} />} />
        <Route path="/add" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
