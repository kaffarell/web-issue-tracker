import React from 'react';
import './css/App.css';
import List from './components/list';


class App extends React.Component {
	render() {
	  return (

    	<div className="App">
  			<List className="list" name="todo" />
			<List className="list" name="doing" />
			<List className="list" name="done" />
		</div>
	 );
  }
}

export default App;
