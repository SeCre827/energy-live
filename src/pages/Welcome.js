import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Welcome.module.css';
import logo from '../img/logo.png';

const Welcome = () => {
  return (
    <div className={classes['main-div']}>
      <div className={classes.logoDiv}>
        <img className={classes.logo} alt='energy live logo' src={logo} />
      </div>
      <div className={classes.login}>
        <Link to='/main' className={classes.loginBtn}>
          Sign in with Google
        </Link>
      </div>

      <div className={classes.footer}>
        <ul className={classes.footerList}>
          <li>
            <Link to='/about'> About </Link>
          </li>
          <li>
            <Link to='/plans'> Plans </Link>
          </li>
          <li>
            <Link to='/legal'> Legal</Link>
          </li>
        </ul>
      </div>
      {/* <picture>
          <img src={backgroundImg} className={classes.kappa} alt='Logo' />;
        </picture> */}
    </div>
  );
};

export default Welcome;
