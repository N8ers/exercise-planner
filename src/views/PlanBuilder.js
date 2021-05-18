import React from "react";
import Box from "@material-ui/core/Box";

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
          sets: 10,
          reps: 10,
          weight: 0,
          weightUnit: "body weight",
          rest: 20,
          restUnit: "seconds",
          notes: "go down then up",
          sortOrder: 2,
        },
        {
          id: 4,
          name: "throw up",
          sets: 1,
          reps: 1,
          weight: 0,
          weightUnit: "N/A",
          rest: 20,
          restUnit: "minutes",
          notes: "bend down, hurl",
          sortOrder: 4,
        },
        {
          id: 2,
          name: "flys",
          sets: 5,
          reps: 15,
          weight: 30,
          weightUnit: "kg",
          rest: 30,
          restUnit: "seconds",
          notes: "arms side, then go up",
          sortOrder: 3,
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
          sortOrder: 1,
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

        <Box m={3}>
          <NewExerciseForm addExercise={this.submitNewExercise} />
        </Box>

        <Box m={3}>
          {this.state.exercises
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((exercise) => (
              <Box mt={3}>
                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  deleteExercise={this.deleteExercise}
                  updateExercise={this.updateExercise}
                />
              </Box>
            ))}
        </Box>
      </div>
    );
  }
}

export default PlanBuilder;
