import React, { useEffect } from "react";
import api from "../utilities/api.js";
import { useSelector } from "react-redux";
const JobList = () => {
  const { isLoading, error, jobs } = useSelector((store) => store.jobs);

  return <div>JobList</div>;
};

export default JobList;
