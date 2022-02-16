import logo from './logo.svg';
import React from 'react';
import './App.css';
class App extends React.Component{
  state = {name:"houcine",changButton:false}
  hendClick=()=>{
this.state.name=="houcine"?this.setState({name:"amin"}):this.setState({name:"houcine"})
  this.setState({changButton:!this.state.changButton})
}
  render() {  
  return (
    <div className="App"><h1 className={this.state.name}>{this.state.name}</h1>
      <button onClick={this.hendClick}>change name</button>
      </div>
  );
   }
  }
  

export default App;
