import React, { Component } from 'react';

const Menuitems = ({menuitems}) => {

	menuitems = menuitems
	console.log (menuitems, "This is menuitems")

	const menuitemsList = menuitems.map((menuitem, i) => {
		return (
			<li key={menuitem.id}>{menuitem.name}
			</li>
		)
	})

	return(
		<ul>
		{menuitemsList}
		</ul>
	)
}

export default Menuitems;







