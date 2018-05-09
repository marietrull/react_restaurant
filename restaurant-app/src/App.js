import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menuitems from './Menuitems';
import CreateMenuitem from './CreateMenuitem';

class App extends Component {
	constructor (){
	    super();

	    this.state = {
	      menuitems: []
	    }
	}

 	componentDidMount(){
	    this.getMenuitems()
	    .then((response) => {
	      console.log(response)
	      this.setState({menuitems: response})
	      console.log(this.state, "this is state")
	    })
	    .catch ((err) => {
	      console.log(err)
	    })
  	}

  	getMenuitems = async () => {
	    const menuitemsJson = await fetch('http://localhost:9292/menuitems')
	    const menuitems = await menuitemsJson.json();
	    return menuitems;
  	}
	render() {
		return (
		  <div className="App">
		    Welcome to the React Restaurant App!

		    <Menuitems menuitems={this.state.menuitems}/>
		    <CreateMenuitem/>

		  </div>
		);
	}
}

export default App;
