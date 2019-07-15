import React from 'react';
import classes from  './App.module.css';
import Persons from '../components/Persons';
import Cockpit from '../components/Cockpit';
import AuthContext from '../context/context-auth';

class App  extends React.Component{
 
  state = {persons : [
    {id: 1, name: 'Harald', age: 45},
    {id: 2, name: 'Sony', age: 35 },
    {id: 3, name: 'Sven', age: 44}
  ],
  showCockpit : true,
  authenticated: false
};

static getDerivedStateFromProps(props, state){
  console.log('[App.js]getDerivedStateFromProps', props);
  return state;
}

componentDidMount(){
  console.log('[App.js]componentDidMount');
}

shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js]shouldComponentUpdate');
  return true;
}

componentDidUpdate(){
  console.log('[App.js]componentDidUpdate');
}

  switchEventHandler = (myName) =>{
    this.setState({ 
      persons : [
        {name: 'Gustav', age: 12},
        {name: 'Lenny', age: 35 },
        {name: myName, age: 53},
      ],
      otherState: 'some other value', 
      showPersons: false
      })
  }

  loginHandler = () => {
  
    this.setState({
      authenticated: this.authenticated = !this.authenticated
   });
  }

  detelePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; //Update state in an immutable fashion
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

        //Alternative const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  logoutHandler = () =>{
    this.setState({authenticated: false});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  outPutHandler(){

  }

  render(){
    console.log('[App.js]render')
    let persons = null;

    if(this.state.showPersons === true){
      persons = (
      <div>
        <Persons 
        persons={this.state.persons} 
        clicked={this.detelePersonHandler} 
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated} />
      </div> );
    }

   

    return (
    <div className={classes.App}>
      {this.state.showCockpit === true ? 
      <button onClick={()=>this.setState({showCockpit: false})}>Remove cockpit</button> :
      <button onClick={()=>this.setState({showCockpit: true})}>Show cockpit</button>
      }
    <AuthContext.Provider
     value={{ authenticated : this.state.authenticated, 
    login: this.loginHandler, logout: this.logoutHandler}}
    >
     {this.state.showCockpit === true ? <Cockpit 
      title={this.props.title}
       length={this.state.persons.length}
        showPersons={this.state.showPersons}
         togglePersons={this.togglePersonsHandler}
         /> : null}
     {persons}
     </AuthContext.Provider>
    </div>
  )}
  }


export default App;
