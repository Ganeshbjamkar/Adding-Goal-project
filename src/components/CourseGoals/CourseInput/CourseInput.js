import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    const inputValue = event.target.value;
    setEnteredValue(inputValue);
    setIsValid(inputValue.trim().length > 0); // Check if input length is greater than 0
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');// clear input after submitting
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label >Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" className={!isValid ? 'invalid' : ''}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
