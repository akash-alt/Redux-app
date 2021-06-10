import React from 'react';
import ReactDOM from 'react-dom';
import Student from './Student';


const r=5001;
const nm="Kunal";
//ReactDOM.render(<Student roll="1100" name="Amit" />,document.getElementById('root'));
ReactDOM.render(<Student roll={r} name={nm} />,document.getElementById('root'));
