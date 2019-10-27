import React, { Component } from 'react';
import profile from '../AboutComponent/assets/profile.jpg';
import './About.css';

class About extends Component{
    constructor(){
        super();
        this.state = { displayBio: false };

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    } 
    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render(){        
        return(
            <div id='About'>
                <img src={profile} alt ='profile-img' className={'profile-img'}/>
                <div className={'description'}>
                    <p>My name is Ben Ebruphihor.I am self-taught web developer.</p>
                    {
                        this.state.displayBio ? (
                            <div>
                                <p>I code everyday and I am constantly looking forward to make new projects. 
                                    I believe in hardwork, patience and persistency. I have come this far and exploring more of web programming/Javascript and programming generally.
                                    It is my utmost hope one day what I have chosen to believe in will pay me off.
                                </p>
                                <button onClick={this.toggleDisplayBio}>Show less</button>
                            </div>
                        ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>Read more</button>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}
export default About;