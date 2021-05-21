import React from "react";
import { TextField, Button } from "@material-ui/core";

import classes from "./ExerciseCard.module.css";

function ExerciseCard(props) {
  function updateExercise(event) {
    let id = props.exercise.id;
    let fieldToUpdate = event.target.name;
    let newValue = event.target.value;
    props.updateExercise(id, fieldToUpdate, newValue);
  }

  return (
    <form>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => props.deleteExercise(props.exercise)}
      >
        X
      </Button>

      <Button variant="contained" onClick={() => alert("add dropset")}>
        add dropset
      </Button>

      <Button variant="contained" onClick={() => alert("add superset")}>
        add superset
      </Button>

      <label>id: {props.exercise.id} </label>

      <TextField
        name="name"
        label="name"
        type="text"
        value={props.exercise.name}
        onChange={updateExercise}
      />

      <TextField
        name="sets"
        label="sets"
        type="number"
        min="0"
        className={classes.numberInput}
        value={props.exercise.sets}
        onChange={updateExercise}
      />

      <TextField
        name="reps"
        label="reps"
        type="number"
        min="0"
        className={classes.numberInput}
        value={props.exercise.reps}
        onChange={updateExercise}
      />

      <TextField
        name="weight"
        label="weight"
        type="number"
        min="0"
        className={classes.numberInput}
        value={props.exercise.weight}
        onChange={updateExercise}
      />

      <TextField
        name="weightUnit"
        label="weight unit"
        select
        SelectProps={{ native: true }}
        value={props.exercise.weightUnit}
        onChange={updateExercise}
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
        value={props.exercise.rest}
        onChange={updateExercise}
      />

      <TextField
        name="restUnit"
        label="rest unit"
        select
        SelectProps={{ native: true }}
        value={props.exercise.restUnit}
        onChange={updateExercise}
      >
        <option value="seconds">seconds</option>
        <option value="minutes">minutes</option>
      </TextField>

      <TextField
        name="notes"
        label="notes"
        type="text"
        multiline
        value={props.exercise.notes}
        onChange={updateExercise}
      />

      <div>
        <div>DROPSET:</div>
        <div>
          {props.exercise.dropSet.map((set, index) => (
            <div key={index + set.weightUnit}>
              set: {set.set} {set.weight} {set.weightUnit} {index}
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}

export default ExerciseCard;
