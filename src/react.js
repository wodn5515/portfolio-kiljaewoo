class Skill extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="skill-wrap flex">
                <img src={this.props.icon}/>
                <div className="tag">{this.props.tag}</div>
                <div className="level flex">{this.props.level}</div>
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
        axios.get("/data/skills")
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
                    <div className="skills">{this.props.mainSkill.join("/")}</div>
                </div>
                <div className="more" onClick={this.props.projectmore.bind(this, this.props.pk)}>More</div>
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

class ProjectDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="project-detail">
                <i className="fas fa-times" onClick={this.props.modal}></i>
                <div className="title">{this.props.project.title}
                    <div className="term">{this.props.project.term}</div>
                </div>
                <div className="skill">
                    <div className="main-skill">{this.props.project.main_skill_used ? this.props.project.main_skill_used.map((skill, index) => <em key={index}>{skill}</em>) : null}</div>
                    <div className="sub-skill">{this.props.project.sub_skill_used ? this.props.project.sub_skill_used.map((skill, index) => <em key={index}>{skill}</em>) : null}</div>
                </div>
                <div className="desc">{this.props.project.desc}</div>
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
            <>
                <div id="modal-bg" onClick={this.props.modal}></div>
                <ProjectDetail modal={this.props.modal} project={this.props.project} />
            </>
        )
    }
}

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            modalOpen: false,
            project: {}
        }
        this.modal = this.modal.bind(this);
        this.projectMore = this.projectMore.bind(this);
    }

    componentDidMount() {
        axios.get("/data/projects")
            .then(res => {
                const projects = res.data;
                this.setState({projects})
            })
    }

    modal() {
        this.setState({modalOpen: !this.state.modalOpen})
    }

    projectMore(pk) {
        axios.get("/data/projects/"+pk)
            .then(res => {
                let project = res.data;
                this.setState({project});
            })
        this.modal();
    }
    
    render() {
        return (
            <div className="container flex mw-1200">
              <div className="header">Projects</div>
              <div className="header-bar"></div>
              <div className="box">
                    {this.state.projects.map((project) => <Project key={project.id} title={project.title} pk={project.id} mainSkill={project.main_skill_used} github={project.github} website={project.site} modal={this.modal} projectmore={this.projectMore} />)}
              </div>
              <div id="modal" className={this.state.modalOpen ? "show flex" : "flex"} >
                <Modal modal={this.modal} project={this.state.project} />
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