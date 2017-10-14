import React, { Component } from 'react';

class Button extends Component{
	render(){
		return(
			<div>
				<button className={"btn " + this.props.variant}>{this.props.text}</button>
			</div>
		)
	}
}

export default Button;