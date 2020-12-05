class Skill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "skill"
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
      skills: []
    };
  }

  componentDidMount() {
    axios.get("/data/skill").then(res => {
      const skills = res.data;
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
      className: "skill-wrap flex"
    }, this.state.skills.map(skill => /*#__PURE__*/React.createElement(Skill, {
      key: skill.id,
      tag: skill.tag,
      level: skill.level,
      percent: skill.percent
    }))));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(SkillList, null), document.getElementById('skill'));