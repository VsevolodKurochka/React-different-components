import React, { Component } from 'react';
import './Filter.css';
import FilterItem from './FilterItem';
class Filter extends Component{
	constructor(props){
		super(props);
		this.state = {
			items: [],
			sortingItems: [],
			value: 'Жесткий'
		}
		this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount(){
		let self = this;
		fetch(self.props.source)
			.then(function(response){
				return response.json();
			})
			.then(function(data){
				self.setState({
					items: data.items
				})
			})
	}

	handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  	event.preventDefault();
    let collect = [];
    collect = this.state.items.filter(
    	item => item.hardness === this.state.value
    )
    this.setState({
    	sortingItems: collect
    })
  }
	render(){
		return(
			<div className="jumbotron">
				<div className="container">
					{/*<div className="filter">
						<p className="filter-title">Умный фильтр:</p>
						<form onSubmit={this.handleSubmit}>
							<div className="row">
								<div className="col-12 col-sm-3">
									<select value={this.state.value} onChange={this.handleChange} className="filter-select custom-select" name="select_hardness">
										<option value="Жесткий">Жесткий</option>
										<option value="Упругий">Упругий</option>
										<option value="Мягкий">Мягкий</option>
									</select>
									<p>{this.state.select_hardness}</p>
								</div>
								
								<div className="col-12 col-sm-3">
									<button type="submit" className="btn btn-danger">Применить фильтр</button>
								</div>
							</div>
						</form>
					</div>*/}
					{
						// if(this.state.sortingItems.length > 0 ){
						// 	this.state.sortingItems.map((item, i)=>{return this.content(item, i)})
						// }else{
						// 	this.state.items.map((item, i)=>{return this.content(item, i)})
						// }
						this.state.sortingItems.length > 0 ? 
							this.state.sortingItems.map( (item, i) => <FilterItem item={item} key={"FilterItem-" + i} />) : 
							this.state.items.map( (item, i) => <FilterItem item={item} key={"FilterItem-" + i} />)
					}
				</div>
			</div>
		)
	}
}

export default Filter;