import React, { Component } from 'react';
import Dog from '../components/dog/Dog';

class LandingPage extends Component {
	constructor() {
		super();
		this.state = {
			doggos: [],
		};
	}
	componentDidMount() {
        fetch("https://random.dog/woof.json")
			.then((response) => response.json())
			.then((response) => this.setState({ doggos: response }))
			.catch((error) => console.log(error));
	}
	render() {
        console.log(this.state, 'State On Homepage')
		return (
			<div>
                <h1>Pictures of Hounds</h1>
                <Dog state={this.state.doggos}/>
			</div>
		);
	}
}

export default LandingPage;
