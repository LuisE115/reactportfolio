import React from 'react';
import runbuddy from '../images/runbuddy.jpg';
import horiseon from '../images/horiseon.jpg';
import cocina from '../images/lacocina.jpg';

export default function Project() {
  return (
    <div className='cont'>
        <h1>My Projects</h1>
        <div className='projects'>
            <div className='project pro1'>
                <div className='projectcontent'>
                    <a href="https://luise115.github.io/run-buddy/" target="_blank" className="project">
                        <div className="">
                            <h3>Run Buddy</h3>
                            <p>Website created following a mockup.</p>
                        </div>
                    </a>  
                </div>
            </div>
            <div className='project pro2'>
                <div className='projectcontent'>
                <a href="https://luise115.github.io/Horiseon/" target="_blank" className="project">
                        <div className="">
                            <h3>Horiseon</h3>
                            <p>Refractored Code.</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='project pro3'>
                <div className='projectcontent'>
                    <a href="https://fast-everglades-74532.herokuapp.com" target="_blank" className="project">
                        <div className="">
                            <h3>La Cocina</h3>
                            <p>Full Stack website with databases and user auth.</p>
                        </div>
                    </a>
                </div>  
            </div>
        </div>
    </div>
  );
}