function ExerciseCard(props) {
  function doSomething() {
    alert("something changed");
  }

  return (
    <li>
      {/* why this anonimous function? because we want to pass an arg (exercise), but don't want to fire it */}
      <form>
        <button onClick={() => props.deleteExercise(props.exercise)}>X</button>
        <label>id: {props.exercise.id} </label>

        <label>name: </label>
        <input type="text" value={props.exercise.name} onChange={doSomething} />

        <label>sets: </label>
        <input
          type="number"
          value={props.exercise.sets}
          onChange={doSomething}
        />

        <label>reps: </label>
        <input
          type="number"
          value={props.exercise.reps}
          onChange={doSomething}
        />

        <label>rest between sets: </label>
        <input
          type="number"
          value={props.exercise.rest}
          onChange={doSomething}
        />

        <select value={props.exercise.restUnit} onChange={doSomething}>
          <option value={"seconds"}>seconds</option>
          <option value={"minutes"}>minutes</option>
        </select>

        <label>notes: </label>
        <textarea
          type="text"
          value={props.exercise.notes}
          onChange={doSomething}
        ></textarea>
      </form>
    </li>
  );
}

export default ExerciseCard;
