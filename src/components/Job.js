
import React, {Component} from 'react';

class Job extends Component {
  render() {
    //console.log(this.props.jobsList);
    const jobsList = this.props.jobsList;
    return (
      <div className="job">
    <div className="job__years">
      <h6 className="job__end">{/* pass in data as props data in WorkHistory compnonent */} {jobsList.years.end}</h6>
      <h6 className="job__start">{/* pass props data in WorkHistory compnonent */} {jobsList.years.start}</h6>
    </div>
    <h5 className="job__title">{/* pass in data as props data in WorkHistory compnonent */} {jobsList.title}</h5>
    <h5 className="job__company">{/* pass  in data asprops data in WorkHistory compnonent */} {jobsList.company}</h5>
    <p className="job__description">{/* pass in data as props data in WorkHistory compnonent */} {jobsList.description}</p>
  </div>
    );
  }
}

export default Job;
