class Skill extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="skill-wrap flex">
                <img src={this.props.icon}/>
                <div className="tag">{this.props.tag}</div>
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
                <div className="w-100">
                    {this.props.list.map((skill) => <Skill key={skill.id} tag={skill.tag} level={skill.level} percent={skill.percent} icon={skill.icon} />)}
                </div>
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
                <div className="more" onClick={this.props.modal}>More</div>
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

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="modal" className="flex">
                <div id="modal-bg" onClick={this.props.modal}></div>
                <div id="project-detail"></div>
            </div>
        )
    }
}

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            modal: false
        }
        this.modal = this.modal.bind(this);
    }

    componentDidMount() {
        axios.get("/data/project")
            .then(res => {
                const projects = res.data;
                this.setState({projects})
            })
    }

    modal() {
        this.setState({modal: !this.state.modal})
    }
    
    render() {
        return (
            <div className="container flex mw-1200">
              <div className="header">Projects</div>
              <div className="header-bar"></div>
              <div className="box">
                    {this.state.projects.map((project) => <Project key={project.id} title={project.title} skill={project.skill_used} github={project.github} website={project.site} modal={this.modal} />)}
              </div>
              {this.state.modal ? <Modal modal={this.modal} /> : null}
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