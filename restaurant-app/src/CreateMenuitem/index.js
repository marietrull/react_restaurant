import React, {Component} from 'react';

class CreateMenuitem extends Component {

	constructor (){
		super();
		this.state = {
			name: ''
		}
	}

	updateItem = e => {
		const name = e.currentTarget.value;
		this.setState({name: name})
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log("were abouttotry toadd, ", this.state.name)
		this.props.addItem(this.state.name);
		this.setState({name: ''})

	}

	render () {

		return (

			<form onSubmit={this.handleSubmit}>

				<label htmlFor='item'/>
				<input type='text' onChange={this.updateItem}/>
				<input type='submit'/>

			</form>

			)
	}
}

export default CreateMenuitem;