import React, {Component} from 'react';
import './style.css'

class Modal extends Component {

	constructor (){
		super();
	}

	render (closeOrders) {

	const menuitemName = this.props.menuitem.name

	const cssClass = this.props.showOrders ? 'Modal-Open' : 'Modal-Closed'


	return (

		<div class={cssClass}>

			{menuitemName} Orders


			<br/>
			<br/>

			<button onClick={this.props.closeOrders}> CLOSE </button>
		</div>

		)
	}
}

export default Modal;