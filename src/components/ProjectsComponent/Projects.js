import React, { Component } from 'react';
import PROJECTS from './ProjectData/projects';
import './Project.css';

const Project = props => {
    const {title, description,  link, image } = props.project
        return(
            <div>
                <div className={'project-content'}>
                    <h4>{title}</h4>
                    <img src={image} alt='project-image' />
                    <p>{description}</p>
                    <a href={link}>{link}</a>
                </div>
            </div>
        );
    }

class Projects extends Component{
    render(){
        return(
            <div id={'projects-container'}>
                <h1>Check some of my works below</h1>
                <div>
                    {
                        PROJECTS.map(PROJECT =>{
                            return(
                                <Project key ={PROJECT.id} project={PROJECT} />
                            )
                        })
                    } 
                </div>
            </div>
        );
    }
}
export default Projects