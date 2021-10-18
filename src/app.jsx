import React from 'react';
import ChirpCard from './components/ChirpCard';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chirps: [],
			message: ''
		};
	}

	handleMessageChange = e => {
		this.setState({
			message: e.target.value
		});
	}

	handleButtonClick = e => {
		e.preventDefault();
		const newChirp = this.state.message;
		this.setState({
			chirps: [...this.state.chirps, newChirp],
			message: ''
		});
	}

	componentDidMount = e => {
		this.setState({
			chirps: ['Sometimes you gotta work a little so you can ball a lot.', 'Treat yo self.', 'Everything hurts and I\'m dying.']
		});
	}
	
	render() {
		return (
			<main className="container">
				<section className="row mt-5 mb-3 justify-content-center">
					<div className="col-md-8">
						<form className="form-group p-3 shadow rounded-sm">
							<input 
								value={this.state.message}
								onChange={this.handleMessageChange}
								placeholder="Enter chirp here..."
								type="text" 
								className="form-control shadow-sm"
							/>
							<button onClick={this.handleButtonClick} className="btn btn-outline-primary mt-3 btn-block w-50 mx-auto shadow-sm">Chirp It!</button>
						</form>
					</div>	
				</section>
				<section className="row my-3 justify-content-center">
					{this.state.chirps.map((chirp, index) => {
						return(<ChirpCard key={index} text={chirp} />);
					})}
				</section>
			</main>
		);
  }
}

export default App;