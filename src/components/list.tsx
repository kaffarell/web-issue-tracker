import React from 'react';
import Card from './card';
import './css/list.css'
import sortable from 'html5sortable/dist/html5sortable.es.js';

interface Props {
	className?: string;
	name: string;
}

class List extends React.Component<Props> {
	
	componentDidMount(){
		sortable('#todo', {
			forcePlaceholderSize: true,
			placeholderClass: 'ph-class',
			hoverClass: 'bg-maroon yellow',
			acceptFrom: '#doing, #done, #todo'
		});

		sortable('#doing', {
			forcePlaceholderSize: true,
			placeholderClass: 'ph-class',
			hoverClass: 'bg-maroon yellow',
			acceptFrom: '#todo, #done, #doing'
		});

		sortable('#done', {
			forcePlaceholderSize: true,
			placeholderClass: 'ph-class',
			hoverClass: 'bg-maroon yellow',
			acceptFrom: '#todo, #doing, #done'
		});

	}

	render() {
		return (
			<div className="List" id={this.props.name}>
				<Card title="Test" description="testy" id={this.props.name + 'issue0'}/>
				<Card title="Testy" description="test" id={this.props.name + 'issue1'}/>
			</div>
		)
	}
}
export default List;
