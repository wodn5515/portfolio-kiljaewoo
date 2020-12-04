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
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "container flex mw-1200"
    }, /*#__PURE__*/React.createElement("div", {
      className: "header"
    }, "Skills"), /*#__PURE__*/React.createElement("div", {
      className: "header-bar"
    }), /*#__PURE__*/React.createElement("div", {
      className: "skill-wrap flex"
    }, /*#__PURE__*/React.createElement(Skill, {
      tag: "Python",
      level: "Intermediate",
      percent: "70"
    }), /*#__PURE__*/React.createElement(Skill, {
      tag: "Django",
      level: "Intermediate",
      percent: "80"
    }), /*#__PURE__*/React.createElement(Skill, {
      tag: "Vue.js",
      level: "Basic",
      percent: "40"
    }), /*#__PURE__*/React.createElement(Skill, {
      tag: "React",
      level: "Basic",
      percent: "30"
    }), /*#__PURE__*/React.createElement(Skill, {
      tag: "MySQL",
      level: "Basic",
      percent: "40"
    }), /*#__PURE__*/React.createElement(Skill, {
      tag: "Github",
      level: "Intermediate",
      percent: "60"
    }), /*#__PURE__*/React.createElement(Skill, {
      tag: "AWS",
      level: "Basic",
      percent: "30"
    }), /*#__PURE__*/React.createElement(Skill, {
      tag: "CSS",
      level: "Intermediate",
      percent: "80"
    }), /*#__PURE__*/React.createElement(Skill, {
      tag: "HTML",
      level: "Intermediate",
      percent: "80"
    }), /*#__PURE__*/React.createElement(Skill, {
      tag: "Javascript",
      level: "Intermediate",
      percent: "70"
    }), /*#__PURE__*/React.createElement(Skill, {
      tag: "JQuery",
      level: "Intermediate",
      percent: "70"
    })));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(SkillList, null), document.getElementById('skill'));