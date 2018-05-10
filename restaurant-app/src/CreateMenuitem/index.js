import React, {Component} from 'react';

class CreateMenuitem extends Component {

	constructor (){
		super();
		this.state = {
			name: '',
			description: ''
		}
	}

	updateName = e => {
		const name = e.currentTarget.value;
		this.setState({name: name})
	}

	updateDescription = e => {
		const description = e.currentTarget.value;
		this.setState({description: description})
	}

	updatePrice = e => {
		const price = e.currentTarget.value;
		this.setState({price: price})
	}



	handleSubmit = e => {
		e.preventDefault();
		this.props.addItem(this.state.name, this.state.description, this.state.price);
		this.setState({
			name: '',
			description: '',
			price: ''
		})

	}

	render () {

		return (

			<form onSubmit={this.handleSubmit}>

				ADD ITEM
				<br/>
				<br/>

				<label htmlFor='item'/>
				<input id="name" type='text' placeholder='Menu Item Name' onChange={this.updateName}/>
				<input id="description" type='text' placeholder='Description' onChange={this.updateDescription}/>
				<input id="price" type='text' placeholder='Price' onChange={this.updatePrice}/>
				<input type='submit'/>

			</form>

			)
	}
}

export default CreateMenuitem;