class Skill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "skill-wrap flex row"
    }, /*#__PURE__*/React.createElement("img", {
      src: this.props.icon,
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

class SkillWrap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex w-100"
    }, /*#__PURE__*/React.createElement("p", {
      className: "type"
    }, this.props.type), this.props.list.map(skill => /*#__PURE__*/React.createElement(Skill, {
      key: skill.id,
      tag: skill.tag,
      level: skill.level,
      percent: skill.percent,
      icon: skill.icon
    })));
  }

}

class SkillList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    };
  }

  componentDidMount() {
    axios.get("/data/skill").then(res => {
      let skills = res.data;
      this.setState({
        skills
      });
    });
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
    }, this.state.skills.map(skill => /*#__PURE__*/React.createElement(SkillWrap, {
      key: skill.id,
      type: skill.skill_type,
      list: skill.skill
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
      className: "link"
    }, /*#__PURE__*/React.createElement("a", {
      href: this.props.website,
      target: "_blank"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-home"
    })), /*#__PURE__*/React.createElement("a", {
      href: this.props.github,
      target: "_blank"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-github"
    }))));
  }

}

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios.get("/data/project").then(res => {
      const projects = res.data;
      this.setState({
        projects
      });
    });
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
      skill: project.skill_used,
      github: project.github,
      website: project.site
    }))));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(SkillList, null), document.getElementById('skill'));
ReactDOM.render( /*#__PURE__*/React.createElement(ProjectList, null), document.getElementById('project'));