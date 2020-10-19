import React, { useState } from 'react';
import style from './App.module.scss';

import TrainingCard from './components/TrainingCard'

function App() {

  const [activeTrainingForm, setActiveTrainingForm] = useState(false);

  const handleShowForm = () => {
    setActiveTrainingForm(!activeTrainingForm)
   
  }



  return (
    <div className={ activeTrainingForm ? ` ${style.App} ${style.active}` : style.App }>
      <button
      className={style.button} type="button" onClick={handleShowForm}>ADD TRAINING</button>
    {activeTrainingForm ? <TrainingCard handleShowForm={handleShowForm} /> : null}

    </div>
  );
}

export default App;

