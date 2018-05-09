import React, {Component} from 'react';

class CreateMenuitem extends Component {

	constructor (){
		super();
		// specific purpose here --> store the information that our users enter into the input
		this.state = {
			title: ''
		}
	}
	// //if you only have on param, you don't have to include parenthesis 
	// updateItem = e => {
	// 	//assigning user input to the title
	// 	const title = e.currentTarget.value;
	// 	this.setState({title: title})
	// }
	// handleSubmit = e => {
	// 	e.preventDefault();
	// 	//this.state.title --> this is a string, NOT an object
	// 	//this.state --> this is the object
	// 	this.props.addItem(this.state.title);
	// }

	render () {
		return (

			<form>

				<label htmlFor='item'/>
				<input type='text' value='New Menu Item'/>
				<input type='submit'/>

			</form>

			)
	}
}

export default CreateMenuitem;