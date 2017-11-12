import React from 'react';

const person = (props) => {
  const { name, age, children } = props;
  return <div>
      <p>
        I'm a <strong>{name}</strong> and I <strong>{age}</strong> years old!
      </p>
      <p>{children}</p>
    </div>;
}

export default person;
