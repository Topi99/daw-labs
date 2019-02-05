import React, { useState } from 'react';
import Lab from './Lab';
import styles from './QuestionsElements.module.scss';

const DynamicJS = props => {
  return(
    <Lab match={{params: {id:4}}} >
      <DynamicJSBase/>
    </Lab>
  );
}

setTimeout(() => document.querySelector('#timeout').classList.toggle('hidden'), 5000);
setInterval(() => document.querySelector('#interval').classList.toggle('hidden'), 3000);

const DynamicJSBase = props => {

  const [txt, setTxt] = useState('');
  
  const handleTxtChange = e => {
    const value = e.target.value;
    setTxt(value);
    document.querySelector("#pTxt").classList.toggle('bold');
  }

  const handleMouseEnter = e => {
    document.querySelector("#help").classList.toggle('hidden');
  }

  const handleMouseLeave = e => {
    document.querySelector("#help").classList.toggle('hidden');
  }
  
  return(
    <>
      <article className="relative">
        <img className="marca" alt="marca de agua" src="http://elahoratamaulipas.com/wp-content/uploads/2018/03/Captura-de-pantalla-2018-03-18-a-las-13.27.14.jpg" />
        <div className="hipster">
          <p className={styles.question}>Marca de agua</p>
          Lorem ipsum dolor amet migas green juice four loko kombucha man bun 3 wolf moon +1 pabst deep v ugh letterpress pickled single-origin coffee crucifix. Humblebrag selfies crucifix austin cray actually blue bottle pug seitan gastropub fingerstache synth retro live-edge fanny pack. 
          Small batch cred etsy, polaroid chicharrones knausgaard coloring book keytar copper mug. Chia raclette synth beard vape chartreuse disrupt franzen. Austin hexagon stumptown bushwick echo park knausgaard yr man bun mixtape af 3 wolf moon cornhole. Sriracha hella bitters +1 iPhone.
          Thundercats blue bottle tacos paleo. Paleo photo booth vexillologist, disrupt etsy hot chicken tousled locavore vegan fam gastropub. Celiac cronut post-ironic tumeric, echo park affogato forage viral. Single-origin coffee meggings health goth af blog taxidermy.
        </div>
      </article>
      <article>
        <p className={styles.question}>Cambio con onChange</p>
        <label to="txt">Escribe aquí: </label>
        <input name="txt" type="text" onChange={handleTxtChange} value={txt} />
        <p id="pTxt">{txt}</p>
      </article>
      <article>
        <p className={styles.question}>Ayuda rápida</p>
        <label to="hover">Pasa el mouse sobre el input: </label>
        <input name="hover" type="text" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        <div id="help" className="hidden">Esta es una ayuda rápida del input</div>
      </article>
      <article>
        <div id="interval" className="hidden" >Con SetInterval()</div>
        <div id="timeout" className="hidden" >Con SetTimeout()</div>
      </article>
    </>
  );
}

export default DynamicJS;