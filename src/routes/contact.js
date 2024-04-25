import React from 'react';
import HeroImage from '../componant/HeroImage/heroImage';
import ContactForm from '../componant/contact/contact';

const Contact =() =>{

    return(
        <div>
            <HeroImage heading="CONTACT." text="Let's have chat"/>
            <ContactForm />
        </div>
    )
}


export default Contact;