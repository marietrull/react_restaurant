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
	    const menuitems = await fetch('http://localhost:9292/menuitems')
	    const menuitemsJson = await menuitems.json();
	    return menuitemsJson;
  	}
  	addItem = async (name) => {
  
    	const menuitems = await fetch('http://localhost:9292/menuitems', {
			method: 'POST',
			body: JSON.stringify({name: name})
    	})

    	
	    const menuitemParsed = await menuitems.json();
	    console.log(menuitemParsed, "menuitemsParsed")

	    this.setState({menuitems: [...this.state.menuitems, menuitemParsed]})

	    return menuitemParsed;
  }
	render() {
		return (
		  <div className="App">
		    Welcome to the React Restaurant App!

		    <Menuitems menuitems={this.state.menuitems} />
		    <CreateMenuitem addItem={this.addItem}/>

		  </div>
		);
	}
}

export default App;
