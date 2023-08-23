import React, { useState, useEffect } from "react";
import './data.css'

export default function Disease() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container-fluid mt-5">
    <div className="main-heading">
      <h1 className="mb-5 text-center">
        <span className="font-weight-bold">COVID-19</span> Total Cases
      </h1>
    </div>
    <div className="table-responsive">
    <table className="table">
        <tbody>
          {Object.keys(data).map((key, index) => (
            <tr key={index}>
              <td style={{ textTransform: "uppercase", font:"bold" }}>{key}</td>
              <td>{data[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}
