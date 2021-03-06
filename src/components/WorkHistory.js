import React, {Component} from 'react'
// import Job components
import Job from './Job';

class WorkHistory extends Component {

  renderList(jobsList){
    const list = jobsList.map(element => {
      return <Job key = {element.title} jobsList = {element} />;
    });

    return list;
  }

  render() {
    //console.log('???');
    /* receive `jobsList` array as props from App compnonent */
    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">
          { /*
              map over jobsList array and return an array of <Job/> components
              NOTE: you must pass values from the each job object
                    to the <Job> component as props...
            */
          }
          {this.renderList(this.props.jobsList)}
        </div>
      </section>
    )
  }
}

export default WorkHistory;
