import React, {Component} from 'react';
import './style.css'

class Modal extends Component {

	constructor (){
		super();
	}

	render (closeOrders) {

	console.log(this.props, 'props Modal')
	const menuitemName = this.props.menuitem.name
	console.log(menuitemName, "menuitem for modal")



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