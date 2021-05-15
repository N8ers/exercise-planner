import React from "react";

import ExerciseCard from "../components/ExerciseCard";
import NewExerciseForm from "../components/NewExerciseForm";

class PlanBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  generateNewId = () => {
    let existingIds = this.state.exercises.map((exercise) => exercise.id)
    let newId = (Math.max(...existingIds) + 1)
    return newId;
  }

  submitNewExercise = (newExercise) => {
    newExercise['id'] = this.generateNewId()
    this.setState({
      exercises: [...this.state.exercises, newExercise],
    });
  };

  deleteExercise = (value) => {
    this.setState({
      exercises: this.state.exercises.filter(
        (exercise) => exercise.id !== value.id
      ),
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

        <div>
          <NewExerciseForm addExercise={this.submitNewExercise} />
        </div>
      </div>
    );
  }
}

export default PlanBuilder;
