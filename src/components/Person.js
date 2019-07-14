import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css';
import withClass from '../hoc/withClass';

class Person extends Component {
  constructor(props){
    super(props)
    this.inputElementRef = React.createRef();
  }

  componentWillUnmount(){
    console.log('[Person.js] componentWillUnmount');
}

  componentDidMount(){
      // this.inputElement.focus();
      this.inputElementRef.current.focus();
  }

  render(){
    console.log('[Person.js] is rendering...');
  return (
    <Fragment>
      <h1 onClick={this.props.click}>Here comes {this.props.name} who is {this.props.age} years old</h1>
      <div>{this.props.children}</div>
      <input
       type='text'
      //  ref={(inputEl) =>{ this.inputElement = inputEl}}
      ref={this.inputElementRef}
        onChange={this.props.changed}
         value={this.props.name} />
    </Fragment>
  )

  }
 
}

Person.propTypes = {
  click : PropTypes.func,
  name : PropTypes.string,
  age : PropTypes.number,
  changed: PropTypes.func,
}

export default withClass(Person, classes.Person);

