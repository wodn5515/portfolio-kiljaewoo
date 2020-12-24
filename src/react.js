class Skill extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="skill-wrap flex row">
                <img src={this.props.icon} width="30px" />
                <div className="bar">
                    <em className="tag">{this.props.tag}</em>
                    <div className="fill-wrap">
                        <div className="fill" style={{width: this.props.percent + '%' }}>
                            <em className="level">{this.props.level}</em>
                        </div>
                    </div>
                    <em className="percent">{this.props.percent}%</em>
                </div>
            </div>
        )
    }
}

class SkillWrap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex w-100">
                <p className="type">{this.props.type}</p>
                {this.props.list.map((skill) => <Skill key={skill.id} tag={skill.tag} level={skill.level} percent={skill.percent} icon={skill.icon} />)}
            </div>
        )
    }
}

class SkillList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []}
    }

    componentDidMount() {
        axios.get("/data/skill")
            .then(res => {
                let skills = res.data;
                this.setState({skills})
            })
    }

    render() {
        return (
        <div className="container flex mw-1200">
            <div className="header">Skills</div>
            <div className="header-bar"></div>
            <div className="box flex">
                {this.state.skills.map((skill) => <SkillWrap key={skill.id} type={skill.skill_type} list={skill.skill} />)}
            </div>
        </div>
        )
    }
}


class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="project-wrap">
                <div className="thumbnail"></div>
                <div className="desc">
                    <div className="title">{this.props.title}</div>
                    <div className="skills">{this.props.skill}</div>
                </div>
                <div className="link">
                    <a href={this.props.website} target="_blank">
                        <i className="fas fa-home"></i>
                    </a>
                    <a href={this.props.github} target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        )
    }
}

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get("/data/project")
            .then(res => {
                const projects = res.data;
                this.setState({projects})
            })
    }
    
    render() {
        return (
            <div className="container flex mw-1200">
              <div className="header">Projects</div>
              <div className="header-bar"></div>
              <div className="box">
                    {this.state.projects.map((project) => <Project key={project.id} title={project.title} skill={project.skill_used} github={project.github} website={project.site} />)}
              </div>
            </div>
        )
    }
}

ReactDOM.render(
    <SkillList/>,
    document.getElementById('skill')
  );

ReactDOM.render(
    <ProjectList/>,
    document.getElementById('project')
);