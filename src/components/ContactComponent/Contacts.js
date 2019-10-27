import React, { Component } from 'React';
import CONTACTS from './ContactData/contacts';
import './Contact.css';

const Contact = props =>{
    const { link, image } = props.contact;
        return(
            <span className={'contact-icons'}>
                <a href={link}>
                    <img src={image} alt='cantact-image' />
                </a>
            </span>
        );
}

class Contacts extends Component{
    render(){
        return(
            <div className='contacts'>
                <h1>Connect with me through any of the following media</h1>
                {
                    CONTACTS.map(CONTACT =>{
                        return(
                            <Contact key={CONTACT.id} contact={CONTACT} />
                        );
                    })
                }
            </div>
        );
    }
}
export default Contacts;