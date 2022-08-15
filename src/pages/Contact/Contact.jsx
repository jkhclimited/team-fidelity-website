import React, { Component } from 'react';
import './Contact.css';
import iconTweet from '../../pics/icon-twitter.png';
import iconEmail from '../../pics/icon-gmail.png';

class Contact extends Component {
    render() {
        return (
            <div className="contactPage">
                <h1>Contact Information</h1>
                <div className="contactText">
                    For any inquiries, please send us an email!
                </div>
                <div className="contactLinks">
                    <img className="iconGmail icons" alt="Gmail" src={iconEmail} /><a href="mailto:teamfidelity.business@gmail.com" className="gmailContact aContactLink" target="_blank" rel="noopener noreferrer">Email</a><br />
                    <p className="textGmail">teamfidelity.business@gmail.com</p>
                    <img className="iconTwitter icons" alt="twitter" src={iconTweet} /><a href="https://twitter.com/TheTeamFidelity" className="twitterContact aContactLink" target="_blank" rel="noopener noreferrer">Twitter</a><br />
                    <p className="textTwitter">https://twitter.com/TheTeamFidelity</p>
                </div>
            </div>
        )
    }
};

export default Contact;