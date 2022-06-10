import React from 'react';
import runbuddy from '../images/runbuddy.jpg';
import horiseon from '../images/horiseon.jpg';
import cocina from '../images/lacocina.jpg';

export default function Project() {
  return (
    <div>
        <h1>My Projects</h1>
        <div className='container row'>
            <div className='card col-6 col-sm-6'>
                <a href="https://luise115.github.io/run-buddy/" target="_blank" className="project">
                    <img className="card-img-top" src={runbuddy} alt="" />
                    <div className="card-bdy">
                        <h3>Run Buddy</h3>
                        <p> HTML/CSS</p>
                    </div>
                </a>  
            </div>
            <div className='card col-6 col-sm-6'>
                <a href="https://luise115.github.io/Horiseon/" target="_blank" className="project">
                    <img className="card-img-top" src={horiseon} alt="" />
                    <div className="card-bdy">
                        <h3>Horiseon</h3>
                        <p> HTML/CSS</p>
                    </div>
                </a>  
            </div>
            <div className='card col-6 col-sm-6'>
                <a href="https://fast-everglades-74532.herokuapp.com" target="_blank" className="project">
                    <img className="card-img-top" src={cocina} alt="" />
                    <div className="card-bdy">
                        <h3>La Cocina</h3>
                        <p>Node/MySQL</p>
                    </div>
                </a>  
            </div>
        </div>
    </div>
  );
}