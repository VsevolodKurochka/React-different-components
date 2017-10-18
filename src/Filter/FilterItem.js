import React, { Component } from 'react';
import FilterListGroup from './FilterListGroup';
import FilterTab from './FilterTab';
class FilterItem extends Component {
	render(){
		return(
			<div className="paper">
				<div className="row">
					<div className="col-12 col-sm-6">
						<img src={this.props.item.image} className="paper-poster" />
					</div>
					<div className="col-12 col-sm-6">
						<div className="paper-header">
							<h1 className="paper-title">{this.props.item.name}</h1>
							<h2 className="paper-subtitle">{(this.props.item.available === "+") ? <span className="text-success">В наличии</span> : <span className="text-danger">Нету в наличии</span>}</h2>
						</div>
						
						<FilterListGroup item={this.props.item} key={"FilterListGroup-" + this.props.index}/>
						<div className="paper-footer">
							<p>
								<span className="paper-price font-weight-bold text-danger text-through">{this.props.item.old_price} грн</span> 
								<span className="paper-price paper-price_new font-weight-bold text-success">{this.props.item.new_price} грн</span>
							</p>
							<p>Вы экономите: {this.props.item.old_price - this.props.item.new_price} грн</p>
						</div>
					</div>
				</div>
				<FilterTab item={this.props.item} key={"FilterTab-" + this.props.index}/>
			</div>
		)
	}
}

export default FilterItem;