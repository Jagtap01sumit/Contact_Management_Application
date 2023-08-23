import React, { useEffect, useState } from "react";
import "./data.css";
import Cases from "./Cases";
import Disease from "./Disease";
export default function Covid_Data() {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://disease.sh/v3/covid-19/countries");
    const actualData = await res.json();

    setData(actualData);
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
      
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">WORLD</span> COVID-19 DATA
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Country</th>
                <th>Flag</th>
                <th>Cases</th>
                <th>Todays Cases</th>
                <th>Death</th>
                <th>TodaysDeath</th>
                <th>recovered</th>
                <th>todayRecovered</th>
                <th>active</th>
                <th>critical</th>
                <th>casesPerOneMillion</th>
                <th>deathsPerOneMillion</th>
                <th>tests</th>
                <th>testsPerOneMillion</th>
                <th>population</th>
                <th>continent</th>
                <th>oneCasePerPeople</th>
                <th>oneDeathPerPeople</th>
                <th>oneTestPerPeople</th>
                <th>activePerOneMillion</th>
                <th>recoveredPerOneMillion</th>
                <th>criticalPerOneMillion</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElem, ind) => {
                return (
                  <tr key={ind}>
                    <td>{curElem.country}</td>
                    <td>
                      <img
                        src={curElem.countryInfo.flag}
                        alt={`${curElem.country} Flag`}
                        width="30"
                        height="20"
                      />
                    </td>
                    <td>{curElem.cases}</td>
                    <td>{curElem.todayCases}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.todayDeaths}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.todayRecovered}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.critical}</td>
                    <td>{curElem.casesPerOneMillion}</td>
                    <td>{curElem.deathsPerOneMillion}</td>
                    <td>{curElem.tests}</td>
                    <td>{curElem.testsPerOneMillion}</td>
                    <td>{curElem.population}</td>
                    <td>{curElem.continent}</td>
                    <td>{curElem.oneCasePerPeople}</td>
                    <td>{curElem.oneDeathPerPeople}</td>
                    <td>{curElem.oneTestPerPeople}</td>
                    <td>{curElem.activePerOneMillion}</td>
                    <td>{curElem.recoveredPerOneMillion}</td>
                    <td>{curElem.criticalPerOneMillion}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Cases />
      <Disease />
    </>
  );
}
