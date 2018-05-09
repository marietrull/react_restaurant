import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Menuitems from './Menuitems'

class App extends Component {
	constructor (){
	    super();

	    this.state = {
	      items: []
	    }
	}

 	componentDidMount(){
	    this.getMenuitems()
	    .then((response) => {
	      console.log(response)
	      this.setState({items: response.item})
	    })
	    .catch ((err) => {
	      console.log(err)
	    })
  	}

  	getMenuitems = async () => {
	    const MenuitemsJson = await fetch('http://localhost:9292/menuitems')
	    const Menuitems = await MenuitemsJson.json();
	    console.log(Menuitems + "this is Menuitems")
	    return Menuitems;
  	}
	render() {
		return (
		  <div className="App">
		    Welcome to the React Restaurant App!
		  </div>
		);
	}
}

export default App;
