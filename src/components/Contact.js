import React from 'react';
import tel from '../images/phone.svg'
import linkedin from '../images/linkedin.svg'
import git from '../images/github.svg';
import email from '../images/email.svg';

export default function Contact() {
  return (
    <div>
      <h1>Contact Info</h1>
      <ul className="list-group">
            <li className="list-group-item">
                <a href="https://www.linkedin.com/in/luis-enriquez-731621229/">
                    <img src={linkedin} alt="" />
                    <p>LinkedIn</p>
                </a>
            </li>
            <li className="list-group-item">
                <a href="https://github.com/LuisE115">
                    <img src={git} alt="" />
                    <p>GitHub</p>
                </a>
            </li>
            <li className="list-group-item">
                <a href="mailto:luisenriquez11@hotmail.com">
                    <img src={email} alt="" />
                    <p>luisenriquez11@hotmail.com</p>
                </a>
            </li>
            <li className="list-group-item">
                <a href="tel:786.307.6676">
                    <img src={tel} alt="" />
                    <p>(786)307-6676</p>
                </a>
            </li>
        </ul>
    </div>
  );
}
