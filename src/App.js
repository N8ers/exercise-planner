import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newExercise: '',
      exercises: ['pushup', 'situp', 'pullup']
    };
  }

  updateNewExercise = (event) => {
    event.preventDefault();
    this.setState({
      newExercise: event.target.value,
    });
  };

  submitNewExercise = (event) => {
    event.preventDefault();
    this.setState({
      exercises: [...this.state.exercises, this.state.newExercise],
    });
    this.setState({
      newExercise: '',
    });
  };

  render() {
    return (
      <div>
        <h1>Exercise:</h1>
        <ul>
          {this.state.exercises.map((exercise, index) => (
            <li key={exercise + index}>{exercise}</li>
          ))}
        </ul>

        <form className="App" onSubmit={this.submitNewExercise}>
          <input value={this.state.newExercise} onChange={this.updateNewExercise} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
