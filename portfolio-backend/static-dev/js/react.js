class Skill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "skill-wrap flex row"
    }, /*#__PURE__*/React.createElement("img", {
      src: "/assets/img/" + this.props.img + ".svg",
      width: "30px"
    }), /*#__PURE__*/React.createElement("div", {
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
        "percent": 70,
        "img": "python"
      }, {
        "id": 2,
        "level": "Intermediate",
        "tag": "Django",
        "percent": 80,
        "img": "django"
      }, {
        "id": 3,
        "level": "Basic",
        "tag": "Vue.js",
        "percent": 40,
        "img": "vue-dot-js"
      }, {
        "id": 4,
        "level": "Basic",
        "tag": "React",
        "percent": 30,
        "img": "react"
      }, {
        "id": 5,
        "level": "Basic",
        "tag": "MySQL",
        "percent": 40,
        "img": "mysql"
      }, {
        "id": 6,
        "level": "Intermediate",
        "tag": "Github",
        "percent": 60,
        "img": "github"
      }, {
        "id": 7,
        "level": "Basic",
        "tag": "AWS",
        "percent": 30,
        "img": "amazonaws"
      }, {
        "id": 8,
        "level": "Intermediate",
        "tag": "CSS",
        "percent": 80,
        "img": "css3"
      }, {
        "id": 9,
        "level": "Intermediate",
        "tag": "HTML",
        "percent": 80,
        "img": "html5"
      }, {
        "id": 10,
        "level": "Intermediate",
        "tag": "Javascript",
        "percent": 70,
        "img": "javascript"
      }, {
        "id": 11,
        "level": "Intermediate",
        "tag": "JQuery",
        "percent": 70,
        "img": "jquery"
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
      percent: skill.percent,
      img: skill.img
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
    }, /*#__PURE__*/React.createElement("a", {
      href: this.props.website,
      target: "_blank"
    }, /*#__PURE__*/React.createElement("i", {
      class: "fas fa-home"
    })), /*#__PURE__*/React.createElement("a", {
      href: this.props.github,
      target: "_blank"
    }, /*#__PURE__*/React.createElement("i", {
      class: "fab fa-github"
    }))));
  }

}

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [{
        "id": "1",
        "title": "덕천제일교회",
        "skill": "Django/JS/MySQL",
        "github": "https://github.com/wodn5515/dcjeil",
        "website": "http://www.dcjeil.net/"
      }, {
        "id": "2",
        "title": "롤 모의밴픽",
        "skill": "Django/Vue",
        "github": "https://github.com/wodn5515/banpick",
        "website": "https://bnpk.kr/"
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
      className: "box"
    }, this.state.projects.map(project => /*#__PURE__*/React.createElement(Project, {
      key: project.id,
      title: project.title,
      skill: project.skill,
      github: project.github,
      website: project.website
    }))));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(SkillList, null), document.getElementById('skill'));
ReactDOM.render( /*#__PURE__*/React.createElement(ProjectList, null), document.getElementById('project'));