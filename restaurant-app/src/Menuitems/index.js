import React, { Component } from 'react';

const Menuitems = ({menuitems}) => {

	menuitems = menuitems

	const menuitemsList = menuitems.map((menuitem, i) => {
		return (
			<li key={menuitem.id}>{menuitem.name}
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







