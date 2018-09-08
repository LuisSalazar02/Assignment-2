import React, {Component} from 'react'
// import EduTitle component
import EduTitle from './EduTitle';

class EducationHistory extends Component {

  renderList(eduList){
    const list = eduList.map(element => {
      return <EduTitle key = {element.institute} eduList = {element} />;
    });

    return list;
  }
  
  render() {
    /* receive `eduList` array as props from App compnonent */
    return (
      <section>
        <h4>Education</h4>
        <div className="skills-list">

          { /*
              map over jobsList array and return an array of <Job/> components
              NOTE: you must pass values from each education object
                    to the <EduTitle> component as props...
            */
          }
          {this.renderList(this.props.eduList)}
        </div>
      </section>
    )
  }
}

export default EducationHistory;
