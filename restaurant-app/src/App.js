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
  	addItem = async (name, description, price) => {
  
    	const menuitems = await fetch('http://localhost:9292/menuitems', {
			method: 'POST',
			body: JSON.stringify({
				name: name,
				description: description,
				price: price
			})
    	})

    	
	    const menuitemParsed = await menuitems.json();
	    console.log(menuitemParsed, "menuitemsParsed")

	    this.setState({menuitems: [...this.state.menuitems, menuitemParsed]})

	    return menuitemParsed;
  	}
    
    deleteItem = async (e) => {
	    console.log('Delete Button Clicked')

	    const id = e.currentTarget.id;

	    console.log(id, ' this is the id in deleteItem')

	    //delete request to the Sinatra app
	    const menuitem = await fetch('http://localhost:9292/menuitems/' + id, {
	      method: 'DELETE'
	    });

	    console.log(menuitem, "menuitem deleteItem")

	    const response = await menuitem.json();
	    console.log(response, 'this is response in deleteItem')

	    if (response.success){
	      this.setState({menuitems: this.state.menuitems.filter((menuitem) => menuitem.id != id)});
	    } else {
	    	console.log("YA DONE FUCKED UP")
	    }
    
  	}
	render() {
		return (
		  <div className="App">
		    Welcome to the React Restaurant App!

		    <Menuitems menuitems={this.state.menuitems} deleteItem={this.deleteItem}/>
		    <CreateMenuitem addItem={this.addItem}/>

		  </div>
		);
	}
}

export default App;
