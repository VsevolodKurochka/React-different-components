import React, { Component } from 'react';

class FilterListGroup extends Component{
	constructor(props){
		super(props);
		this.state = {
			list: [
				{
					name: "Тип",
					value: this.props.item.type
				},
				{
					name: "Нагрузка на 1 спальное место",
					value: this.props.item.load_for_one_person,
					afterText: "кг"
				},
				{
					name: "Вес матраса",
					value: this.props.item.weight,
					afterText: "кг/м.кв"
				},
				{
					name: "Жесткость",
					value: this.props.item.hardness
				},
				{
					name: "Гарантия",
					value: this.props.item.garant,
					afterText: "года"
				}
			]
		}
	}
	render(){
		return(
			<div className="paper-body">
				<ul className="paper-list list-group list-group-flush">
					{this.state.list.map( (item, index) => {
						return(
							<li className="list-group-item" key={"FilterListGroupItem-" + index}>
								{item.name}: <span className="font-weight-bold">{item.value}</span> {item.afterText ? item.afterText : ''}
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default FilterListGroup;