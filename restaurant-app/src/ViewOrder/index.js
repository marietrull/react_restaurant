import React, {Component} from 'react';
import './style.css'

class Modal extends Component {

	constructor (){
		super();

		this.state = {
			inputVal: ''
		}
	}

	render () {

	console.log(this.props,  "This is props Modal")

	const cssClass = this.props.showOrders ? 'Modal-Open' : 'Modal-Closed'

	return (

		<div class={cssClass}>
			<button> CLOSE </button>
		</div>

		)
	}
}

export default Modal;