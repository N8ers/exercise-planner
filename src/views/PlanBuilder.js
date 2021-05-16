import React from "react";

import ExerciseCard from "../components/ExerciseCard";
import NewExerciseForm from "../components/NewExerciseForm";
// import Dummy from "../components/dummy";

class PlanBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        {
          id: 1,
          name: "pushup",
          sets: 10,
          reps: 10,
          weight: 0,
          weightUnit: "body weight",
          rest: 20,
          restUnit: "seconds",
          notes: "go down then up",
        },
        {
          id: 4,
          name: "throw up",
          sets: 1,
          reps: 1,
          weight: 0,
          weightUnit: "body weight",
          rest: 20,
          restUnit: "minutes",
          notes: "bend down, hurl",
        },
        {
          id: 2,
          name: "flys",
          sets: 5,
          reps: 15,
          weight: 30,
          weightUnit: "lbs",
          rest: 30,
          restUnit: "seconds",
          notes: "arms side, then go up",
        },
        {
          id: 3,
          name: "pullup",
          sets: 5,
          reps: 1,
          weight: 0,
          weightUnit: "bodyweight",
          rest: 1,
          restUnit: "minutes",
          notes: "hang down, go up",
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

        <hr />

        <div>
          <NewExerciseForm addExercise={this.submitNewExercise} />
        </div>

        <hr />

        {/* <div>
          <Dummy value={this.state.exercises[1].restUnit} />
        </div> */}
      </div>
    );
  }
}

export default PlanBuilder;
