import React, { useState } from 'react';
import styles from './QuestionsElements.module.scss';

const EventsJS = props => {
  const [passState, setPassState] = useState('bad');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [emailState, setEmailState] = useState('bad');
  const [email, setEmail] = useState('');

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

  const checkMail = value => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(value);
  }
  
  const handleEmailChange = e => {
    let value = e.target.value;
    setEmailState(value);
    setEmailState(checkMail(value) ? 'good' : 'bad');
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
      <li>
        <p className={styles.question}>Validación de email</p>
        <p>Esto es un simple validador de direcciones de email. Lo hago aquí mismo para no tener que crear otra página.</p>
        <form>
          <p>
            <label to="email">Ingresa tu correo: </label>
            <input type="text" name="email" className={emailState} onChange={handleEmailChange} />
          </p>
        </form>
      </li>
    </ol>
  );
};

export default EventsJS;