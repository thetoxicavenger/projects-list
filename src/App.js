import React, { Component } from 'react';
import FilterProjects from './components/FilterProjects'
import ProjectsList from './components/ProjectsList'

class App extends Component {
  state = {
    projects: [],
    error: false,
    filter: ""
  }
  componentDidMount = async () => {
    try {
      const res = await fetch('http://localhost:5000/projects')
      if (!res.ok) {
        throw new Error('Bad res from API.')
      }
      const json = await res.json()
      this.setState({
        projects: json
      })
    } catch (e) {
      this.setState({
        error: true
      })
    }
    
  }
  setFilter = filter => {
    this.setState({
      filter
    })
  }
  render() {
    const filteredProjects = this.state.projects.filter(project => project.skillset.includes(this.state.filter.toLowerCase()))
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>G-Projects</h1>
        <div>
          <h3>Available Projects</h3>
        </div>
        {!this.state.error ? 
          <>
            {this.state.projects.length > 0 && <FilterProjects filter={this.state.filter} setFilter={this.setFilter} />}
            <ProjectsList projects={filteredProjects} error={this.state.error} />
          </>
        : <div style={{ color: 'red' }}>Error! Please contact support.</div>
      }
        
      </div>
    );
  }
}

export default App;
