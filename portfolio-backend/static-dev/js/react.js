class Skill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "skill-wrap flex"
    }, /*#__PURE__*/React.createElement("img", {
      src: this.props.icon
    }), /*#__PURE__*/React.createElement("div", {
      className: "tag"
    }, this.props.tag), /*#__PURE__*/React.createElement("div", {
      className: "level flex"
    }, this.props.level));
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
    }, this.props.type), /*#__PURE__*/React.createElement("div", {
      className: "w-100"
    }, this.props.list.map(skill => /*#__PURE__*/React.createElement(Skill, {
      key: skill.id,
      tag: skill.tag,
      level: skill.level,
      percent: skill.percent,
      icon: skill.icon
    }))));
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
    axios.get("/data/skills").then(res => {
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
    }, this.props.mainSkill.join("/"))), /*#__PURE__*/React.createElement("div", {
      className: "more",
      onClick: this.props.projectmore.bind(this, this.props.pk)
    }, "More"), /*#__PURE__*/React.createElement("div", {
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

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "project-detail"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times",
      onClick: this.props.modal
    }), /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, this.props.project.title, /*#__PURE__*/React.createElement("div", {
      className: "term"
    }, this.props.project.term)), /*#__PURE__*/React.createElement("div", {
      className: "skill"
    }, /*#__PURE__*/React.createElement("div", {
      className: "main-skill"
    }, this.props.project.main_skill_used ? this.props.project.main_skill_used.map((skill, index) => /*#__PURE__*/React.createElement("em", {
      key: index
    }, skill)) : null), /*#__PURE__*/React.createElement("div", {
      className: "sub-skill"
    }, this.props.project.sub_skill_used ? this.props.project.sub_skill_used.map((skill, index) => /*#__PURE__*/React.createElement("em", {
      key: index
    }, skill)) : null)), /*#__PURE__*/React.createElement("div", {
      className: "desc"
    }, this.props.project.desc));
  }

}

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      id: "modal-bg",
      onClick: this.props.modal
    }), /*#__PURE__*/React.createElement(ProjectDetail, {
      modal: this.props.modal,
      project: this.props.project
    }));
  }

}

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      modalOpen: false,
      project: {}
    };
    this.modal = this.modal.bind(this);
    this.projectMore = this.projectMore.bind(this);
  }

  componentDidMount() {
    axios.get("/data/projects").then(res => {
      const projects = res.data;
      this.setState({
        projects
      });
    });
  }

  modal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  projectMore(pk) {
    axios.get("/data/projects/" + pk).then(res => {
      let project = res.data;
      this.setState({
        project
      });
    });
    this.modal();
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
      pk: project.id,
      mainSkill: project.main_skill_used,
      github: project.github,
      website: project.site,
      modal: this.modal,
      projectmore: this.projectMore
    }))), /*#__PURE__*/React.createElement("div", {
      id: "modal",
      className: this.state.modalOpen ? "show flex" : "flex"
    }, /*#__PURE__*/React.createElement(Modal, {
      modal: this.modal,
      project: this.state.project
    })));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(SkillList, null), document.getElementById('skill'));
ReactDOM.render( /*#__PURE__*/React.createElement(ProjectList, null), document.getElementById('project'));