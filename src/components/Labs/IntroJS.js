import React, { useState } from 'react';
import styles from '../Home/Home.module.scss';
import stylesQ  from './QuestionsElements.module.scss';

const IntroJS = props => {
  const [square, setSquare] = useState([]);
  const [numbers, setNumbers] = useState([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
  const [sumAnswer, setSumAnswer] = useState('Ingresa tu respuesta');
  const [invNum, setInvNum] = useState(0);
  const [array, setArray] = useState([]);
  const [negativos, setNegativos] = useState(0);
  const [ceros, setCeros] = useState(0);
  const [positivos, setPositivos] = useState(0);
  const promArr1 = [
    [10, 15, 65, 98],
    [25, 465, 32, 2125],
    [20, 24, 48, 95, 62]
  ];
  const promArr2 = [
    [102, 654, 889, 312],
    [471, 852, 963, 159],
    [951, 753, 1453, 2564]
  ]

  const handleSqChange = e => {
    let array = [];
    for(let i = 0; i<=parseInt(e.target.value); i++){ 
      array.push(i);
    }
    setSquare(array);
  }

  const setNewRandomNumbers = e => {
    setNumbers([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
  }

  const handleSumAnswer = e => {
    if(parseInt(e.target.value) === numbers[0] + numbers[1]) {
      setSumAnswer('Bieeen');
    } else {
      setSumAnswer('Maaaal');
    }
  }

  const handleInvNum = e => {
    setInvNum(parseInt(e.target.value.split('').reverse().join('')));
  }

  const handleCounter = e => {
    let arra = e.target.value.split(' ');
    setArray(arra.map(n => parseInt(n)));
    console.log(array);
    setNegativos(0);
    setCeros(0);
    setPositivos(0);

    for(let n of array) {
      if(n===0) {setCeros(ceros+1); setPositivos(positivos);}
      else if(isNaN(n)) {setPositivos(positivos); setNegativos(negativos)}
      else if(n>0) setPositivos(positivos+1);
      else if(n<0) setNegativos(negativos+1);
    }
  }

  const getProm = arr => {
    let proms = [];

    for(let ar of arr) {
      proms.push(ar.reduce((a, b) => a + b, 0)/ar.length);
    }

    console.log(proms);

    return proms.toString();
  }

  const uniquifyArray = arr => {
    if(arr.length === 0) return undefined;
  
    let unique = new Set(arr);
    arr = Array.from(unique);
  
    return arr.toString();
  };
  
  return(
    <>
      <p className={styles.biggerFont}>Holaa</p>
      <ol className="lab--exercises">

        <li>
          <p className={stylesQ.question}>Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida </p>
          <input type="number" placeholder="ingresa el número" onChange={handleSqChange} />
          <table>
            <tbody>
            <tr>
              <th>Número</th>
              <th>Cuadrado</th>
              <th>Cubo</th>
            </tr>
              {
                square.map(n => {
                  return(
                    <tr>
                      <td>{n}</td>
                      <td>{n*n}</td>
                      <td>{n*n*n}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </li>

        <li>
          <p className={stylesQ.question}>Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.</p>
          <button onClick={setNewRandomNumbers}>Nuevos números</button>
          <p>El resultado de la suma de {numbers[0]} y {numbers[1]} es:  <input type="number" onChange={handleSumAnswer} /> </p>
          <p>{sumAnswer}</p>
        </li>

        <li>
          <p className={stylesQ.question}>Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.</p>
          <p>Ingresa el número: <input type="number" onChange={handleInvNum} /></p>
          <p>EL número invertido es {invNum}</p>
        </li>

        <li>
          <p className={stylesQ.question} >Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.</p>
          <p>Ingresa los números a agregar al arreglo separados por un espacio: <input type="text" onChange={handleCounter} /></p>
          <p>Positivos: {positivos}</p>
          <p>Negativos: {negativos}</p>
          <p>Ceros: {ceros}</p>
        </li>

        <li>
          <p className={stylesQ.question}>
          Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.
          </p>
          <p> 
            Para [
              [10, 15, 65, 98],
              [25, 465, 32, 2125],
              [20, 24, 48, 95, 62]
            ]
            El resultado es {getProm(promArr1)}
          </p>
          <p> 
            Para [
              [102, 654, 889, 312],
              [471, 852, 963, 159],
              [951, 753, 1453, 2564]
            ]
            El resultado es {getProm(promArr2)}
          </p>
        </li>

        <li>
          <p className={stylesQ.question} >
            Take the following array, remove the duplicates, and return a new array. You're more than likely going to want to check out the indexOf function.

            Do this in the form of a function uniquifyArray that receives an array of words as a parameter.
          </p>
          <p>
            Resultado con arreglo ['Ironhack', 'Ironhack', 'Ironhack'] es {uniquifyArray(['Ironhack', 'Ironhack', 'Ironhack'])}
          </p>
          <p>
            Resultaod con arreglo ['iPhone', 'Samsung', 'Android', 'iOS', 'iPhone', 'Samsung', 'Nokia', 'Blackberry', 'Android'] es {uniquifyArray(['iPhone', 'Samsung', 'Android', 'iOS', 'iPhone', 'Samsung', 'Nokia', 'Blackberry', 'Android'])}
          </p>
        </li>

      </ol>
    </>
  );
};

export default IntroJS;