import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './App';
import {skills, eduList, jobsList} from './data/datasource';

ReactDOM.render(<App skills = {skills} eduList = {eduList} jobsList = {jobsList} />, document.getElementById('root'));
