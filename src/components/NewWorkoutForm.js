import React, { useState } from 'react';
import style from './NewWorkoutForm.module.scss';


const NewWorkoutForm = (props) => {

  const [workoutName, setWorkoutName] = useState("bench press")
  const [workoutSeries, setWorkoutSeries] = useState(5)
  const [workoutWeight, setWorkoutWeight] = useState(20)


  const handleWorkoutName = (event) => { setWorkoutName(event.target.value) }
  const handleWorkoutSeries = (event) => { setWorkoutSeries(parseInt(event.target.value)) }
  const handleWorkoutWeight = (event) => { setWorkoutWeight(parseInt(event.target.value)) }


  const addWorkout = () => {

    props.setWorkoutsArr([...props.workoutsArr, {
      name: workoutName,
      series: workoutSeries,
      weight: workoutWeight
    }])

    props.setIsOpenAddTraining(false)
    console.log(props.workoutsArr)
  }


  return (
    <>
      <div className={style.overlay}>
        <div >
          <label for="workout">Workout name: </label>
          <input type="text" id="workout" value={workoutName} onChange={handleWorkoutName} />
        </div>

        <div >
          <label for="series">Number of series:</label>
          <input type="number" id="series" min={0} value={workoutSeries} onChange={handleWorkoutSeries} />
        </div>

        <div >
          <label for="weight">Weight:</label>
          <input type="number" id="weight" min={0} value={workoutWeight} onChange={handleWorkoutWeight} />
        </div>

        <button type="button" onClick={addWorkout}>Save</button>
      </div>
    </>
  )

}

export default NewWorkoutForm