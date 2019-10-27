import React, { Component } from'react';
import About from '../components/AboutComponent/About';
import Projects from '../components/ProjectsComponent/Projects';
import Contacts from '../components/ContactComponent/Contacts';

class App extends Component {
    render(){        
        return(
            <div>
                <About />
                <Projects />                
                <Contacts />
            </div>
        );
    }
}

export default App;