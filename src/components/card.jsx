import React from 'react';

class Card extends React.Component {
	render() {
		return (
			<div className={"card " + this.props.id}>
				<h2>{this.props.title} </h2>	
				<p>{this.props.description} </p>
			</div>
		);
	}

}
export default Card;
