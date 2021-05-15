import React from "react";
import { TextField, Button } from "@material-ui/core";

import classes from "./NewExerciseForm.module.css";

class NewExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newExercise: {
        name: "",
        sets: 0,
        reps: 0,
        weight: 0,
        weightUnit: "lbs",
        rest: 0,
        restUnit: "seconds",
        notes: "",
      },
    };
  }

  resetForm = () => {
    this.setState({
      newExercise: {
        name: "",
        sets: 0,
        reps: 0,
        weight: 0,
        weightUnit: "lbs",
        rest: 0,
        restUnit: "seconds",
        notes: "",
      },
    });
  };

  handleUpdate = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      newExercise: {
        [name]: value,
      },
    });
  };

  submitNewExercise = (event) => {
    event.preventDefault();
    this.props.addExercise(this.state.newExercise);
    this.resetForm();
  };

  render() {
    return (
      <form onSubmit={this.submitNewExercise}>
        <TextField
          name="name"
          label="name"
          type="text"
          onChange={this.handleUpdate}
        />
        <TextField
          name="sets"
          label="sets"
          type="number"
          min="0"
          className={classes.numberInput}
          onChange={this.handleUpdate}
        />
        <TextField
          name="reps"
          label="reps"
          type="number"
          min="0"
          className={classes.numberInput}
          onChange={this.handleUpdate}
        />

        <TextField
          name="weight"
          label="weight"
          type="number"
          className={classes.numberInput}
          onChange={this.handleUpdate}
        />

        <TextField
          name="weightUnit"
          label="weight unit"
          select
          SelectProps={{ native: true }}
          onChange={this.handleUpdate}
        >
          <option value={"lbs"}>lbs</option>
          <option value={"kg"}>kg</option>
          <option value={"body weight"}>body weight</option>
          <option value={"N/A"}>N/A</option>
        </TextField>

        <TextField
          name="rest"
          label="rest time"
          type="number"
          min="0"
          className={classes.numberInput}
          onChange={this.handleUpdate}
        />
        
        <TextField
          name="restUnit"
          label="rest unit"
          onChange={this.handleUpdate}
          select
          SelectProps={{ native: true }}
        >
          <option value={"seconds"}>seconds</option>
          <option value={"minutes"}>minutes</option>
        </TextField>

        <TextField
          name="notes"
          label="notes"
          type="text"
          multiline
          onChange={this.handleUpdate}
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
    );
  }
}

export default NewExerciseForm;
