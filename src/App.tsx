import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './components/list';


class App extends React.Component {
	render() {
	  return (
		<div className="App">
			<div className="Lists">
				<List className="list" name="todo" />
				<List className="list" name="doing" />
				<List className="list" name="done" />
			</div>
			<button className="btn btn-primary">New Issue</button>
		</div>
	 );
  }
}

export default App;
