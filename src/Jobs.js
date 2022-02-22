import React from "react";

const Jobs = ({ jobs, changeJob, value }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <div className="job-details" key={index}>
            <button
              className={`job-btn ${index === value && "active-btn"}`}
              style={{ marginRight: ".3rem" }}
              onClick={() => {
                changeJob(index);
              }}
            >
              {job.company}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
