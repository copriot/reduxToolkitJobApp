import { useSelector } from "react-redux";
import Loader from "../Components/Loader.jsx";
import Error from "../Components/Error.jsx";
import Card from "../Components/Card.jsx";
const JobList = ({ retry }) => {
  const { isLoading, error, jobs } = useSelector((store) => store.job);

  return (
    <div className="list-page">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error msg={error} retry={retry} />
      ) : (
        <div className="cards-wrapper">
          {jobs.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
