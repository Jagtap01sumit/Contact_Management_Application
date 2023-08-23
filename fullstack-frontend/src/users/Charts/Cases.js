import React, { useState, useEffect } from "react";
import "./data.css";

export default function Cases() {
  const [data, setData] = useState([]);
  
  const getCaseData = async () => {
    const res = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    const caseData = await res.json();
    console.log(caseData);
    setData(caseData.cases); // Set the cases data directly
  };
  
  useEffect(() => {
    getCaseData();
  }, []);
  
  return (
    <div className="container-fluid mt-5">
      <div className="main-heading">
        <h1 className="mb-5 text-center">
          <span className="font-weight-bold">COVID-19</span> Historical Data
        </h1>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th style={{ textTransform: "uppercase" }}>Date</th>
              <th style={{ textTransform: "uppercase" }}>Cases</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((date, ind) => (
              <tr key={ind}>
                <td >{date}</td>
                <td>{data[date]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

