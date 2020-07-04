import React from 'react';

interface Props {
	id: string;
	title: string;
	description: string;
}

class Card extends React.Component<Props> {
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
