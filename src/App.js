import './App.css';
import React from 'react';
import { DatePicker } from './DatePicker';

function App() {
  return (
    <DatePicker
        value="2020-01-02"
        onFocus={() => {
          console.log('Focused');
        }}
        onChange={() => {
          console.log('Changed');
        }}
        onBlur={() => {
          console.log('Blurred');
        }}
      />
  );
}

export default App;
