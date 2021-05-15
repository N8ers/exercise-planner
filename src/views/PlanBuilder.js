import React from "react";

import ExerciseCard from "../components/ExerciseCard";

class PlanBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newExercise: "",
      exercises: [
        {
          id: 0,
          name: "pushup",
          sets: 0,
          reps: 0,
          rest: 0,
          restUnit: "seconds",
          notes: "",
        },
        {
          id: 1,
          name: "situp",
          sets: 0,
          reps: 0,
          rest: 0,
          restUnit: "seconds",
          notes: "",
        },
        {
          id: 2,
          name: "pullup",
          sets: 0,
          reps: 0,
          rest: 0,
          restUnit: "seconds",
          notes: "",
        },
      ],
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
    console.log('value: ', value)
    this.setState({
      exercises: this.state.exercises.filter((exercise) => exercise.id !== value.id),
    });
  };

  render() {
    return (
      <div>
        <h1>Exercise:</h1>
        <ul>
          {this.state.exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
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
