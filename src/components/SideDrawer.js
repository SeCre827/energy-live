import React, { useRef } from 'react';
import classes from './SideDrawer.module.css';

// να φτιαξω ενα component option που να κανει render δυναμικα τα options me map kai tha tou pernaw ta options me ena array
//  edw mesa na exw ena state poy tha allazei me to refresh kai tha
// allazei to component

const SideDrawer = () => {
  const quantityInputRef = useRef();
  const countryInputRef = useRef();
  const startDateInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    console.log('constructor running');

    const enteredQuantity = quantityInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const startDate = startDateInputRef.current.value;

    console.log(enteredCountry);
    console.log(enteredQuantity);
    console.log(startDate);
  }

  return (
    <div className={classes.mainDiv}>
      <h1> EnergyLive 2022</h1>
      <div className={classes.infoDiv}>
        <label htmlFor='start-date'>Starting Date:</label>
        <div className={classes.picker}>
          <input
            ref={startDateInputRef}
            type='date'
            id='start-date'
            name='start-date'
            // value='2022-03-01'
            max='2022-03-31'
            min='2022-01-01'
          />
        </div>
        <form onSubmit={submitHandler} className={classes.form1}>
          <div className={classes.options}>
            <div>
              <label htmlFor='quantity'>Quantity:</label>
              <br></br>
              <select name='quantity' id='quantity' ref={quantityInputRef}>
                <option value='actualTotalLoad'>Actual total Load</option>
                <option value='generationPerType'>Generation Per Type</option>
                <option value='crossBorderFlows'>Cross border flows</option>
              </select>

              <br></br>
              <br></br>
            </div>
            <div>
              <label htmlFor='country'>Country:</label>
              <br></br>
              <select name='country' id='country' ref={countryInputRef}>
                <option value='a'>A</option>
                <option value='b'>B</option>
                <option value='c'>C</option>
                <option value='d'>D</option>
              </select>
            </div>
          </div>
          <div className={classes.submitButton}>
            <button>Refresh</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideDrawer;
