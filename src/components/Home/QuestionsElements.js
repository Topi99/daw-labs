import React from 'react';

export const QuestionsElements = (props) => {
  return(
    <>
      {
        props.questions.map(q => {
          return(
            <li>
              <p>{q.q}</p>
              <p>{q.a}</p>
            </li>
          )
        })
      }
    </>
  );
}