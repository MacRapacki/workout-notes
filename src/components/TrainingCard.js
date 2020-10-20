import React, { useState } from 'react';
import style from './TrainingCard.module.scss'

import NewWorkoutForm from './NewWorkoutForm'

const TrainingCard = (props) => {

    const [isOpenAddTraining, setIsOpenAddTraining] = useState(false)
    const [workoutsArr, setWorkoutsArr] = useState([])

    const handleAddTraining = () => {
        setIsOpenAddTraining(!isOpenAddTraining)
    }
    const handleEdit = (index) => {
        console.log(index)
    }

    return (
        <>
            <div className={style.overlay}>
                <div className={style.wrapper}>

                    <button type="button" onClick={handleAddTraining}>Add workout</button>
                    <button type="button" onClick={props.handleShowForm}>X</button>

                    {isOpenAddTraining ?

                        <NewWorkoutForm
                            setWorkoutsArr={setWorkoutsArr}
                            workoutsArr={workoutsArr}
                            isOpenAddTraining={isOpenAddTraining}
                            setIsOpenAddTraining={setIsOpenAddTraining}
                        />
                        : null}

                    {workoutsArr.map((workout, index) => {
                        return (
                            <div key={index}>
                                <p>{workout.name}</p>
                                <p>{workout.series}</p>
                                <p>{workout.weight}</p>
                                {index}
                                <button
                                    type="button"
                                    onClick={() => handleEdit(index)}

                                > edit </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TrainingCard