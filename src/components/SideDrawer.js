import React, { useState } from 'react';
import classes from './SideDrawer.module.css';
import DatePicker from 'react-date-picker';

const SideDrawer = () => {
  const [startDate, setStartDate] = useState(new Date());

  const changeDateHandler = (date) => {
    setStartDate(date);
    console.log(date);
  };

  return (
    <div className={classes.mainDiv}>
      <h1> EnergyLive 2022</h1>
      <div className={classes.infoDiv}>
        <h2>Starting Date:</h2>
        <div className={classes.picker}>
          <DatePicker
            className={classes.picker1}
            onChange={changeDateHandler}
            value={startDate}
          />
        </div>
        <div>Rest buttons that change Dynamically</div>
      </div>
    </div>
  );
};

export default SideDrawer;
