import React, { Component } from 'react';

class FilterTab extends Component{
	constructor(props){
		super(props);
		this.state = {
			items: [
				{
					id: "consist-" + this.props.index,
					name: "Состав",
					active: true,
					tab: [
						{
							name: "Состав",
							details: this.props.item.composition.case
						},
						{
							name: "Наполнение",
							details: this.props.item.composition.filling
						}
					]
				}
			]
		}
	}
	render(){
		return(
			<div>
				<ul className="nav nav-tabs" role="tablist">
					{this.state.items.map( (item, index) => {
						return(
							<li className="nav-item" key={"tabItem-" + index}>
								<a className={"nav-link" + (item.active) ? "active" : ""} data-toggle="tab" href={"#" + item.id} role="tab">{item.name}</a>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default FilterTab;
/*
<div>
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" data-toggle="tab" href={"#consist-" + this.props.increment} role="tab">Состав</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" data-toggle="tab" href={"#additional-characteristics-" + this.props.increment} role="tab">Дополнительные характеристики</a>
					</li>
				</ul>
				<div className="tab-content">
					<div className="tab-pane fade show active" id={"consist-" + this.props.increment} role="tabpanel">
						<ul className="list-group list-group-flush">
							<li className="list-group-item"><span className="font-weight-bold">Состав:</span> {this.props.item.composition.case}</li>
							<li className="list-group-item"><span className="font-weight-bold">Наполнение:</span> {this.props.item.composition.filling}</li>
						</ul>
					</div>
					<div className="tab-pane fade" id={"additional-characteristics-" + this.props.increment} role="tabpanel">
						<p>{this.props.item.characteristics}</p>
					</div>
				</div>
			</div>
*/