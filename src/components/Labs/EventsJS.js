import React, { useState } from 'react';
import styles from './QuestionsElements.module.scss';

const EventsJS = props => {
  const [passState, setPassState] = useState('bad');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');

  const checkPass = (value) => {
    if((pass1 === value || pass2 === value) && (pass1 !== '' && pass2 !== '')) {
      setPassState('good');
    } else {
      setPassState('bad');
    }
  }

  const hanglePass1Change = e => {
    let value = e.target.value; 
    setPass1(value);
    checkPass(value);
  }
  
  const hanglePass2Change = e => {
    let value = e.target.value; 
    setPass2(value);
    checkPass(value);
  }

  return(
    <ol>
      <li>
        <p  className={styles.question}>Validador de Contraseñas</p>
        <form>
          <p>
            <label to="pass1">Ingresa tu contraseña: </label>
            <input name="pass1" type="password" onChange={hanglePass1Change} value={pass1} placeholder="Ingresa tu contraseña" />
          </p>

          <p>
            <label to="pass2">Confirma tu contraseña: </label>
            <input name="pass2" type="password"className={passState} onChange={hanglePass2Change} value={pass2}  placeholder="Confirma tu contraseña" />
          </p>
        </form>
      </li>
      <li>
        <p className={styles.question}>Artículos</p>
        <a href="/daw-labs/extras/tienda/">Ir a Tienda</a>
      </li>
    </ol>
  );
};

export default EventsJS;