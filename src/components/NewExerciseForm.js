import { useRef } from "react";

function NewExerciseForm(props) {
  const nameRef = useRef();
  const setsRef = useRef();
  const repsRef = useRef();
  const restRef = useRef();
  const restUnitRef = useRef();
  const notesRef = useRef();

  function resetForm () {
    nameRef.current.value = ''
    setsRef.current.value = 0
    repsRef.current.value = 0
    restRef.current.value = 0
    restUnitRef.current.value = 'seconds'
    notesRef.current.value = ''
  }

  function submitNewExercise(event) {
    event.preventDefault();

    const newExercise = {
      name: nameRef.current.value,
      sets: setsRef.current.value,
      reps: repsRef.current.value,
      rest: restRef.current.value,
      restUnit: restUnitRef.current.value,
      notes: notesRef.current.value,
    };
    
    props.addExercise(newExercise)
    resetForm()
  }

  return (
    <form onSubmit={submitNewExercise}>
      <label>name: </label>
      <input type="text" ref={nameRef} />

      <label>sets: </label>
      <input type="number" ref={setsRef} />

      <label>reps: </label>
      <input type="number" ref={repsRef} />

      <label>rest between sets: </label>
      <input type="number" ref={restRef} />

      <select ref={restUnitRef}>
        <option value={"seconds"}>seconds</option>
        <option value={"minutes"}>minutes</option>
      </select>

      <label>notes: </label>
      <textarea type="text" ref={notesRef}></textarea>
      <button>Add</button>
    </form>
  );
}

export default NewExerciseForm;
