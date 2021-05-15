import { TextField, Button } from "@material-ui/core";
import React from "react";

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
          min="0"
          type="number"
          onChange={this.handleUpdate}
        />
        <TextField
          name="reps"
          label="reps"
          min="0"
          type="number"
          onChange={this.handleUpdate}
        />

        <TextField
          label="weight"
          name="weight"
          type="number"
          onChange={this.handleUpdate}
        />

        <TextField
          name="weightUnit"
          onChange={this.handleUpdate}
          label="weight unit"
          select
          SelectProps={{ native: true }}
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
          label="notes"
          name="notes"
          multiline
          type="text"
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
