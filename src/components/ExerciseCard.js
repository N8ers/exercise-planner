import React from "react";
import { TextField, Button } from "@material-ui/core";

import classes from "./ExerciseCard.module.css";

class ExerciseCard extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   exercise: {
    //     name: "",
    //     sets: 0,
    //     reps: 0,
    //     weight: 0,
    //     weightUnit: "lbs",
    //     rest: 0,
    //     restUnit: "seconds",
    //     notes: "",
    //   },
    // };
  }

  updateExercise = (event) => {
    let id = this.props.exercise.id;
    let fieldToUpdate = event.target.name;
    let newValue = event.target.value;
    this.props.updateExercise(id, fieldToUpdate, newValue);
  };

  render() {
    return (
      <form>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.props.deleteExercise(this.props.exercise)}
        >
          X
        </Button>
        <label>id: {this.props.exercise.id} </label>

        <TextField
          name="name"
          label="name"
          type="text"
          value={this.props.exercise.name}
          onChange={this.updateExercise}
        />

        <TextField
          name="sets"
          label="sets"
          type="number"
          min="0"
          className={classes.numberInput}
          value={this.props.exercise.sets}
          onChange={this.updateExercise}
        />

        <TextField
          name="reps"
          label="reps"
          type="number"
          min="0"
          className={classes.numberInput}
          value={this.props.exercise.reps}
          onChange={this.updateExercise}
        />

        <TextField
          name="weight"
          label="weight"
          type="number"
          min="0"
          className={classes.numberInput}
          value={this.props.exercise.weight}
          onChange={this.updateExercise}
        />

        <TextField
          name="weightUnit"
          label="weight unit"
          select
          SelectProps={{ native: true }}
          value={this.props.exercise.weightUnit}
          onChange={this.updateExercise}
        >
          <option value={"lbs"}>lbs</option>
          <option value={"kg"}>kg</option>
          <option value={"body weight"}>body weight</option>
          <option value={"N/A"}>N/A</option>
        </TextField>

        <TextField
          name="rest"
          label="rest"
          type="number"
          min="0"
          className={classes.numberInput}
          value={this.props.exercise.rest}
          onChange={this.updateExercise}
        />

        <TextField
          name="restUnit"
          label="rest unit"
          select
          SelectProps={{ native: true }}
          value={this.props.exercise.restUnit}
          onChange={this.updateExercise}
        >
          {/* <option>{this.props.exercise.restUnit}</option> */}
          <option value="seconds">seconds</option>
          <option value="minutes">minutes</option>
        </TextField>

        {/* <span>{this.props.exercise.restUnit}</span>
        <select value={this.props.exercise.restUnit}>
          <option value="seconds">seconds</option>
          <option value="minutes">minutes</option>
        </select> */}

        <TextField
          name="notes"
          label="notes"
          type="text"
          multiline
          value={this.props.exercise.notes}
          onChange={this.updateExercise}
        />

      </form>
    );
  }
}

export default ExerciseCard;
