import React from "react";

import ExerciseCard from "../components/ExerciseCard";

class PlanBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newExercise: "",
      exercises: ["pushup", "situp", "pullup"],
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
      newExercise: "",
    });
  };

  deleteExercise = (value) => {
    this.setState({
      exercises: this.state.exercises.filter((exercise) => exercise !== value),
    });
  };

  render() {
    return (
      <div>
        <h1>Exercise:</h1>
        <ul>
          {this.state.exercises.map((exercise) => (
            <ExerciseCard
              exercise={exercise}
              deleteExercise={this.deleteExercise}
            />
          ))}
        </ul>

        <form className="App" onSubmit={this.submitNewExercise}>
          <input
            value={this.state.newExercise}
            onChange={this.updateNewExercise}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default PlanBuilder;
