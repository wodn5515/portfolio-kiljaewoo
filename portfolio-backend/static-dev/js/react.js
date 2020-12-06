class Skill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "skill-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bar"
    }, /*#__PURE__*/React.createElement("em", {
      className: "tag"
    }, this.props.tag), /*#__PURE__*/React.createElement("div", {
      className: "fill-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fill",
      style: {
        width: this.props.percent + '%'
      }
    }, /*#__PURE__*/React.createElement("em", {
      className: "level"
    }, this.props.level))), /*#__PURE__*/React.createElement("em", {
      className: "percent"
    }, this.props.percent, "%")));
  }

}

class SkillList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [{
        "id": 1,
        "level": "Intermediate",
        "tag": "Python",
        "percent": 70
      }, {
        "id": 2,
        "level": "Intermediate",
        "tag": "Django",
        "percent": 80
      }, {
        "id": 3,
        "level": "Basic",
        "tag": "Vue.js",
        "percent": 40
      }, {
        "id": 4,
        "level": "Basic",
        "tag": "React",
        "percent": 30
      }, {
        "id": 5,
        "level": "Basic",
        "tag": "MySQL",
        "percent": 40
      }, {
        "id": 6,
        "level": "Intermediate",
        "tag": "Github",
        "percent": 60
      }, {
        "id": 7,
        "level": "Basic",
        "tag": "AWS",
        "percent": 30
      }, {
        "id": 8,
        "level": "Intermediate",
        "tag": "CSS",
        "percent": 80
      }, {
        "id": 9,
        "level": "Intermediate",
        "tag": "HTML",
        "percent": 80
      }, {
        "id": 10,
        "level": "Intermediate",
        "tag": "Javascript",
        "percent": 70
      }, {
        "id": 11,
        "level": "Intermediate",
        "tag": "JQuery",
        "percent": 70
      }]
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "container flex mw-1200"
    }, /*#__PURE__*/React.createElement("div", {
      className: "header"
    }, "Skills"), /*#__PURE__*/React.createElement("div", {
      className: "header-bar"
    }), /*#__PURE__*/React.createElement("div", {
      className: "box flex"
    }, this.state.skills.map(skill => /*#__PURE__*/React.createElement(Skill, {
      key: skill.id,
      tag: skill.tag,
      level: skill.level,
      percent: skill.percent
    }))));
  }

}

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "project-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "thumbnail"
    }), /*#__PURE__*/React.createElement("div", {
      className: "desc"
    }, /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, this.props.title), /*#__PURE__*/React.createElement("div", {
      className: "skills"
    }, this.props.skill)), /*#__PURE__*/React.createElement("div", {
      className: "more"
    }, "MORE"));
  }

}

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [{
        "id": "1",
        "title": "덕천제일교회",
        "skill": "Django/JS/MySQL"
      }, {
        "id": "2",
        "title": "롤 모의밴픽",
        "skill": "Django/Vue"
      }]
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "container flex mw-1200"
    }, /*#__PURE__*/React.createElement("div", {
      className: "header"
    }, "Projects"), /*#__PURE__*/React.createElement("div", {
      className: "header-bar"
    }), /*#__PURE__*/React.createElement("div", {
      className: "box flex row"
    }, this.state.projects.map(project => /*#__PURE__*/React.createElement(Project, {
      key: project.id,
      title: project.title,
      skill: project.skill
    }))));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(SkillList, null), document.getElementById('skill'));
ReactDOM.render( /*#__PURE__*/React.createElement(ProjectList, null), document.getElementById('project'));