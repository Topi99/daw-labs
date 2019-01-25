import React from 'react';
import styles  from './QuestionsElements.module.scss';

export const QuestionsElements = props => {
  return(
    <>
      {
        props.questions.map(q => {
          return(
            <li>
              <p className={styles.question}>{q.q}</p>
              <p>{q.a}</p>
            </li>
          )
        })
      }
    </>
  );
}