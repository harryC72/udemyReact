import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = ({persons, showPersons, togglePersons, title}) => {
    let assignedClasses = [];
    let btnClass = '';

    if(showPersons===true){
        btnClass = classes.red;
    }


    if(persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
          <h1>{title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={togglePersons}>Toggle persons</button>
        </div>
        
    );
}

export default Cockpit;