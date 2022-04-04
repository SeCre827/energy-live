import React from 'react';
import classes from './SideDrawer.module.css';

const SideDrawer = () => {
  return (
    <div className={classes.mainDiv}>
      <h1> EnergyLive 2022</h1>
      <div className={classes.infoDiv}> INFO </div>
    </div>
  );
};

export default SideDrawer;
