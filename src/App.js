import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/Example01'
import ComponentWithContext from './components/ComponentWithContext/ComponentWithContext'
import Counter from './components/Counter'

function App() {
  return (
    <Counter initialCount="10"/>
  );
}

export default App;
