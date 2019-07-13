import React from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css';

function Person({name, age, children, click, changed}) {
 

  return (
    <div className={classes.Person}>
      <h1 onClick={click}>Here comes {name} who is {age} years old</h1>
      <div>{children}</div>
      <input type='text' onChange={changed} value={name} />

    </div>
  )
}

Person.propTypes = {

}

export default Person;

