import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Header/>
				{this.props.children}
			</div>
		)
	}
}

// Since we're expecting to receive props as children from redux.
// we'll validate it using PropTypes

App.propTypes = {
	children: PropTypes.object.isRequired
}

export default App;