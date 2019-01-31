import React from 'react'
import Project from './Project'

class ProjectsList extends React.Component {
    render() {
        const projects = this.props.projects.length > 0 ? this.props.projects.map(project => <Project key={project.id} project={project}  />) : <div>Loading...</div>
        return (
            <div>
                {projects}
            </div>
        )
    }
}

export default ProjectsList