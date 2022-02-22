import React from "react";

const JobDetails = ({ currentJob }) => {
  console.log("job details", currentJob);
  return (
    <div>
      <p>{currentJob.title}</p>
    </div>
  );
};

export default JobDetails;
