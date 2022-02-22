import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import JobDetails from "./JobDetails";
import Jobs from "./Jobs";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchItems = async () => {
    let res = await fetch(url);
    let data = await res.json();
    setAllData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const changeJobDetails = (order) => {
    setValue(order);
    console.log(order);
    //setAllData(allData[order]);
  };
  if (loading) {
    return <p>loading....</p>;
  }
  const { company, dates, duties, title } = allData[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <Jobs jobs={allData} changeJob={changeJobDetails} value={value} />
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default App;
