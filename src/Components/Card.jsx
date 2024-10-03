import React from "react";
import DellButton from "./DelButton";
import { FaMapLocationDot, FaBagShopping } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";

const Card = ({ job }) => {
  // durumlara göre renk basan nesne olustur
  const collor = {
    Mülakat: "green",
    Reddedildi: "red",
    "Devam Ediyor": "orange",
  };
  return (
    <div className="card">
      <div className="head">
        <section>
          <div className="letter">
            <span>{job.company[0]}</span>
          </div>
          <div className="info">
            <p>{job.position}</p>
            <p>{job.company}</p>
          </div>
        </section>

        <section>
          <div>
            <DellButton id={job.id} />
          </div>
        </section>
      </div>
      <div className="body">
        <div className="field">
          <p>{job.location}</p>
          <FaMapLocationDot />
        </div>
        <div className="field">
          <p>{job.type}</p> <FaBagShopping />
        </div>
        <div className="field">
          <p>{job.date}</p>
          <CiCalendarDate />
        </div>
        <div className="status">
          <p style={{ background: collor[job.status] }}>{job.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
