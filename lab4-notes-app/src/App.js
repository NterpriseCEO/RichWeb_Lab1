import './App.css';
import React from 'react';

//notes class
function Note(props) {
	return (
		<pre className="note" style={{ backgroundColor: props.colour }}>
			{props.note}
		</pre>
	);
}

class Panel extends React.Component {
	textInput = "";
	colourValue = "#ffffff";

	values = [];

	constructor(props) {
		super(props);

		this.state = {
			notes: [],
			displayNotes: []
		}
	}

	render() {
		return (
			<div className="panel">
				<textarea onChange={this.changeValue}></textarea>
				<input type = "color" onChange={this.changeColour} defaultValue = "#ffffff"></input>
				<button onClick={() => this.addNote()}>Add note</button>
				<div className="notes">
					{this.state.displayNotes}
				</div>
			</div>

		);
	}

	changeValue = event => {
		this.textInput = event.target.value;
	}

	changeColour = event => {
		console.log(event.target.value);
		this.colourValue = event.target.value;
	}

	addNote() {
		//Adds a note to the notes array if the textInput value is not empty
		if(this.textInput === "" || this.textInput === null) {
			return;
		}
		//Pushes the textInput value to the notes array
		this.state.notes.push({note: this.textInput, colour: this.colourValue});
		this.textInput = "";
		//Updates the displayNotes array with the contents of the notes array
		this.setState({
			displayNotes: this.state.notes.map((note, index) => {
				return <Note key={index} note = {note.note} colour = {note.colour}/>
			})
		});
	}
}

function App() {
	return (
		<div>
			<Panel/>
		</div>
	);
}

export default App;