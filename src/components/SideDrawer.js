import React, { useRef, useState } from 'react';
import classes from './SideDrawer.module.css';

// να φτιαξω ενα component option που να κανει render δυναμικα τα options me map kai tha tou pernaw ta options me ena array
//  edw mesa na exw ena state poy tha allazei me to refresh kai tha
// allazei to component

const SideDrawer = () => {
  const countryInputRef = useRef();
  const startDateInputRef = useRef();
  const quantityInputRef = useRef();
  const generationTypeInputRef = useRef();
  const countryToInputRef = useRef();
  const countryFromInputRef = useRef();

  const [mainPage, setMainPage] = useState('actualTotalLoad');

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

  const changeHandler = (event) => {
    const newMainPage = quantityInputRef.current.value;
    setMainPage(newMainPage);
  };

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
            {/* 1nd option */}
            <div>
              <label htmlFor='quantity'>Quantity:</label>
              <br></br>
              <select
                name='quantity'
                id='quantity'
                ref={quantityInputRef}
                onChange={changeHandler}
              >
                <option value='actualTotalLoad'>Actual total Load</option>
                <option value='generationPerType'>Generation Per Type</option>
                <option value='crossBorderFlows'>Cross border flows</option>
              </select>

              <br></br>
              <br></br>
            </div>
            {/* 2nd option */}
            {(mainPage === 'actualTotalLoad' ||
              mainPage === 'generationPerType') && (
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
            )}
            {mainPage === 'crossBorderFlows' && (
              <div>
                <label htmlFor='countryFrom'>Country (from):</label>
                <br></br>
                <select
                  name='countryFrom'
                  id='countryFrom'
                  ref={countryFromInputRef}
                >
                  <option value='a'>A</option>
                  <option value='b'>B</option>
                  <option value='c'>C</option>
                  <option value='d'>D</option>
                </select>
              </div>
            )}
            {/* end of second option  */}
            {/* start of 3 option */}
            {mainPage === 'generationPerType' && (
              <div>
                <label htmlFor='generationType'>Generation Type:</label>
                <br></br>
                <select
                  name='generationType'
                  id='generationType'
                  ref={generationTypeInputRef}
                >
                  <option value='naturalGas'>Nautral gas</option>
                  <option value='oil'>Oil</option>
                </select>
              </div>
            )}
            {mainPage === 'crossBorderFlows' && (
              <div>
                <label htmlFor='countryTo'>Country (to):</label>
                <br></br>
                <select name='countryTo' id='countryTo' ref={countryToInputRef}>
                  <option value='a'>A</option>
                  <option value='b'>B</option>
                  <option value='c'>C</option>
                  <option value='d'>D</option>
                </select>
              </div>
            )}
            {/* end  of 3rd option */}
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
