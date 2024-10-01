import React, { useEffect } from "react";
import api from "../utilities/api.js";
const JobList = () => {
  useEffect(() => {
    api
      .get("/jobs")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return <div>JobList</div>;
};

export default JobList;
