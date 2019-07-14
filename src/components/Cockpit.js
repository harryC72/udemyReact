import React, { useEffect, memo } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = ({length, showPersons, togglePersons, title}) => {
    useEffect(() =>{
      console.log('[Cockpit.js]useEffect');
      let timer = setTimeout(() => {
        alert('Data has been saved');
      }, 1000);
      return () => { 
        console.log('[Cockpit.js] clean up work in Cockpit.js');
        clearTimeout(timer);
       };
    }, []); //In the array dependencies are passed
    let assignedClasses = [];
    let btnClass = '';

    if(showPersons===true){
        btnClass = classes.red;
    }


    if(length <= 2){
      assignedClasses.push(classes.red);
    }

    if(length <= 1){
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

export default memo(Cockpit);