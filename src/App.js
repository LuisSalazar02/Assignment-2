import React, { Component } from 'react';
//import logo from './logo.svg';

import SkillsList from './components/SkillsList';
import DegreeHistory from './components/DegreeHistory';
import WorkHistory from './components/WorkHistory';

class App extends Component {
  render() {
    return (
      <div>
        <SkillsList skills = {this.props.skills} />
        <DegreeHistory eduList = {this.props.eduList} />
        <WorkHistory jobsList = {this.props.jobsList} />
      </div>
    );
  }
}

export default App;
