import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { getSkills } from "../../actions/skills";

class Skill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skill-wrap flex">
        <img src={this.props.skill.icon} />
        <div className="tag">{this.props.skill.tag}</div>
        <div className="level flex">{this.props.skill.level}</div>
      </div>
    );
  }
}

class SkillList extends Component {
  componentDidMount() {
    this.props.getSkills();
  }

  render() {
    return (
      <Fragment>
        {this.props.skills.map((skill, index) => (
          <div key={index} className="flex w-100">
            <p className="type">{skill.skill_type}</p>
            <div className="w-100">
              {skill.skill.map((skilldetail, index) => (
                <Skill key={index} skill={skilldetail} />
              ))}
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills.skills,
});

SkillList = connect(mapStateToProps, { getSkills })(SkillList);

class SkillWrap extends Component {
  render() {
    return (
      <section id="skill">
        <div className="container flex mw-1200">
          <div className="header">Skills</div>
          <div className="header-bar"></div>
          <div className="box flex">
            <SkillList />
          </div>
        </div>
      </section>
    );
  }
}

export default SkillWrap;
