import React from "react";

import ExerciseCard from "../components/ExerciseCard";
import NewExerciseForm from "../components/NewExerciseForm";

class PlanBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        {
          id: 1,
          name: "pushup",
          sets: 0,
          reps: 0,
          weight: 0,
          weightUnit: "lbs",
          rest: 0,
          restUnit: "seconds",
          notes: "",
        },
        {
          id: 2,
          name: "situp",
          sets: 0,
          reps: 0,
          weight: 0,
          weightUnit: "lbs",
          rest: 0,
          restUnit: "seconds",
          notes: "",
        },
        {
          id: 3,
          name: "pullup",
          sets: 0,
          reps: 0,
          weight: 0,
          weightUnit: "lbs",
          rest: 0,
          restUnit: "seconds",
          notes: "",
        },
      ],
    };
  }

  generateNewId = () => {
    let existingIds = this.state.exercises.map((exercise) => exercise.id);
    if (!existingIds.length) {
      return 1;
    }
    let newId = Math.max(...existingIds) + 1;
    return newId;
  };

  submitNewExercise = (newExercise) => {
    newExercise["id"] = this.generateNewId();
    this.setState({
      exercises: [...this.state.exercises, newExercise],
    });
  };

  updateExercise = (id, fieldToUpdate, newValue) => {
    this.setState({
      exercises: this.state.exercises.map((exercise) => {
        if (exercise.id === id) {
          exercise[fieldToUpdate] = newValue;
        }
        return exercise;
      }),
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
        <div>
          {this.state.exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              deleteExercise={this.deleteExercise}
              updateExercise={this.updateExercise}
            />
          ))}
        </div>

        <div>
          <NewExerciseForm addExercise={this.submitNewExercise} />
        </div>
      </div>
    );
  }
}

export default PlanBuilder;
