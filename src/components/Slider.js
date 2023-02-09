import React from 'react';
import Likert from 'react-likert-scale';

export default () => {
  const likertOptions = {
    question: "Leadersip & Strategy",
    responses: [
      { value: 1, text: "Follow" },
      { value: 2, text: "Apply" },
      { value: 3, text: "Contribute" },
      { value: 4, text: "Define" },
      { value: 5, text: "Inspire" }
    ],
    onChange: val => {
      console.log(val);
    }
  };
  return (
    <Likert {...likertOptions} />
  )
}
