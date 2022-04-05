import React, { useRef, useState } from 'react';
import classes from './SideDrawer.module.css';
import DatePicker from 'react-date-picker';

const SideDrawer = () => {
  const [startDate, setStartDate] = useState(new Date());
  const quantityInputRef = useRef();
  const countryInputRef = useRef();

  const changeDateHandler = (date) => {
    setStartDate(date);
    console.log(date);
  };

  function submitHandler(event) {
    event.preventDefault();

    const enteredQuantity = quantityInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;

    console.log(enteredCountry);
    console.log(enteredQuantity);
    console.log(startDate);
  }

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
        <form onSubmit={submitHandler} className={classes.form1}>
          <div className={classes.options}>
            <div>
              <label for='quantity'>Quantity:</label>
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
              <label for='country'>Country:</label>
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
