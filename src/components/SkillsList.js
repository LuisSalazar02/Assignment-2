import React, {Component} from 'react'
// import Skill component
import Skill from './Skill';

class SkillsList extends Component {
  
  renderList(skills){
    const list = skills.map(element => {
      return <Skill key = {element} skill = {element} />;
    });

    return list;
  }

  render() {
    return (
      /* receive `skills` array as props from App compnonent */
      <section>
        <h4>Skills</h4>
        <div className="skills-list">
          { /*
              map over skills array and return an array of <Job/> components
              NOTE: you must pass the string value to the <Skills> component as props...
            */
          }
          {this.renderList(this.props.skills)}
        </div>
      </section>
    )
  }
}

export default SkillsList;
