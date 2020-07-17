import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter';
import CounterAdv from './components/CounterAdv';

ReactDOM.render(
  <>
    <Counter min={10} max={20}/>
    <CounterAdv min={0} max={50}/>
  </>,
  document.getElementById('root')
);

