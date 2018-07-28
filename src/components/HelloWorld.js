import React from 'react';

export default ({greeting = 'Bonjour', to}) => (
  <h1 style={styles.helloWorld} >{greeting} {to}</h1>
)

const styles = {
  helloWorld: {
    color: 'orange',
    backgroundColor: 'black',
  },
};