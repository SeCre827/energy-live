import React from 'react';
import MainContent from '../components/MainContent';
import SideDrawer from '../components/SideDrawer';
import classes from './Main.module.css';

const Main = () => {
  return (
    <div className={classes.mainGrid}>
      <div className={classes.side}>
        <SideDrawer />
      </div>
      <div className={classes.mainContent}>
        <MainContent />
      </div>
    </div>
  );
};

export default Main;
