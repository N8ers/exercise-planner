import React from "react";
import { TextField, Button, Box } from "@material-ui/core";

import classes from "./ExerciseCard.module.css";

function ExerciseCard(props) {
  function updateExercise(event) {
    let id = props.exercise.id;
    let fieldToUpdate = event.target.name;
    let newValue = event.target.value;
    props.updateExercise(id, fieldToUpdate, newValue);
  }

  function addDropSet() {
    let id = props.exercise.id;
    let dropset = {
      weigth: 0,
      weightUnit: "lbs",
      reps: 0,
    };
    props.addDropSet(id, dropset);
  }

  function updateDropset() {
    alert("modfiy dropset");
  }

  return (
    <form>
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

      <Button
        variant="contained"
        color="secondary"
        onClick={() => props.deleteExercise(props.exercise)}
      >
        X
      </Button>

      <Box ml={25}>
        <div>DROPSET:</div>
        <div>
          {props.exercise.dropSet.map((set, index) => (
            <div key={'dropset-' + props.exercise.id + '-' + index}>
              <TextField
                name="dropset-set"
                label="sets"
                type="number"
                min="0"
                className={classes.numberInput}
                value={0}
                onChange={updateDropset}
              />
              <TextField
                name="dropset-rep"
                label="reps"
                type="number"
                min="0"
                className={classes.numberInput}
                value={0}
                onChange={updateDropset}
              />
              <TextField
                name="dropset-weight"
                label="weight"
                type="number"
                min="0"
                className={classes.numberInput}
                value={0}
                onChange={updateDropset}
              />
            </div>
          ))}
        </div>
      </Box>

      <Box ml={25}>
        <Button variant="contained" onClick={addDropSet}>
          add dropset
        </Button>

        <Button variant="contained" onClick={() => alert("add superset")}>
          add superset
        </Button>
      </Box>
    </form>
  );
}

export default ExerciseCard;
