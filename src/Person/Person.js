import React from 'react';

const Person = (props) => {
  const { name, age } = props;
  return <p>I'm a { name } and I { age } years old!</p>
}

export default Person;
