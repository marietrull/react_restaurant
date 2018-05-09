import React, { Component } from 'react';

const Menuitems = ({menuitems, deleteItem}) => {

	// menuitems = menuitems

	const menuitemsList = menuitems.map((menuitem, i) => {
		return (
			<li key={menuitem.id}>{menuitem.name}
				<button id={menuitem.id} onClick={deleteItem}>DELETE</button>
			</li>
		)
	})

	return(
		<ul>
		MENU ITEMS
		{menuitemsList}
		</ul>
	)
}

export default Menuitems;







