import React, { Component } from 'react';
import { increment, decrement } from './actions/counter';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		const { pluseOne, minusOne, counter } = this.props
		return(
			<div>
				<p>counter: {counter}</p>
				<button onClick={pluseOne}>+</button>
				<button onClick={minusOne}>-</button>
			</div>
		)
	}
}

export default connect((state) => {
	const { counter } = state;
	return { counter }
}, {
	pluseOne: increment,
	minusOne: decrement
})(App);