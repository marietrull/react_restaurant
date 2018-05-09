import React, { Component } from 'react';

const Menuitems = ({Menuitems}) => {
	const MenuitemsList = Menuitems.map((item, i) => {
		console.log(MenuitemList, "this is MenuitemsList")
		return (
			<li key={item.id}>{item.title}
			</li>
		)
	})

	// console.log(items, "this is props in item list")

	return(

		<ul>
		{MenuitemsList}
		</ul>
	)
}

export default Menuitems; 