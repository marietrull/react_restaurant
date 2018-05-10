import React, { Component } from 'react';

const Menuitems = ({menuitems, deleteItem, showOrders}) => {

	const menuitemsList = menuitems.map((menuitem, i) => {
		return (
			<li key={menuitem.id}>{'ITEM: ' + menuitem.name + ' DESCRIPTION: ' + menuitem.description + ' PRICE: ' + menuitem.price}
				<button id={menuitem.id} onClick={showOrders}>VIEW ORDERS</button>
				<button id={menuitem.id} onClick={deleteItem}>DELETE</button>
			</li>
		)
	})

	return(

		<ul class='menuitems'>
		MENU ITEMS 
		<br/>
		<br/>
		{menuitemsList}
		</ul>
	)
}

export default Menuitems;







