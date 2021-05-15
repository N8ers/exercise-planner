function ExerciseCard(props) {
  return (
    <li>
      {/* why this anonimous function? because we want to pass an arg (exercise), but don't want to fire it */}
      <button onClick={() => props.deleteExercise(props.exercise)}>X</button>
      {props.exercise}
    </li>
  );
}

export default ExerciseCard;
