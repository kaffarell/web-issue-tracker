import React from 'react';
import Card from './card';
import './list.css'

class List extends React.Component {
	render() {
		return (
			<div className="List">
				<Card title="Test" description="testy" />
				<Card title="Test" description="testy" />
			</div>
		)
	}
}
export default List;
