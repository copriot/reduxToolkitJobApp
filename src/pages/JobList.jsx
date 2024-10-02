import { useSelector } from "react-redux";
import Loader from "../Components/Loader.jsx";
import Error from "../Components/Error.jsx";
const JobList = ({ retry }) => {
  const { isLoading, error, jobs } = useSelector((store) => store.job);

  return (
    <div className="list-page">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error msg={error} retry={retry} />
      ) : (
        <div>
          {jobs.map((i, index) => (
            <div key={index}>merhabalar</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
