import React from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import classes from './MainContent.module.css';
import jwt_decode from "jwt-decode";

const MainContent = ({token, setLoginData}) => {
  const decodedToken = jwt_decode(token);

  const doLogout = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/signout`,
        {
          method: "post",
          mode: "cors",
          headers: {
            "Authorization": "Bearer " + token,
          },
        }
      );

      const status = await res.status;

      if (status === 200) {
        setLoginData(undefined);
        console.log("remove from storage")
        localStorage.removeItem("token");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={classes.mainDiv}>
      <div className={classes.info}>
        <span> {decodedToken.email}</span>
        <Link to='/welcome' onClick={doLogout}> Sign out </Link>
      </div>
      <div className={classes.infoDiv}>
        <div className={classes.loadAndCountry}>
          <span>#Actual total Load</span>
          <span>#country</span>
        </div>
        <div className={classes.chart}>
          <Chart options={'2'} />
        </div>
        <h2 className={classes.lastUpdate}> #Latest update</h2>
        <div className={classes.helperDiv}>
          <div className={classes.chartButtons}>
            <button> Download Image</button>
            <button> download data</button>
          </div>
          <div className={classes.finalInfo}>
            <span>Service Status: #Live</span>
            <span>Days Left: #27</span>
            <Link to='/extend-plan'>Extend Plan</Link>
            <Link to='/about'>About</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
