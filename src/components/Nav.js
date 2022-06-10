import React from 'react';

function Nav({ currentPage, handlePageChange}) {
    return (
        <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
                <a href="#about" onClick={() => handlePageChange('About')}
                className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a href="#project" onClick={() => handlePageChange('Project')}
                className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
                    Projects
                </a>
            </li>
            <li className="nav-item">
                <a href="#contact" onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact Me
                </a>
            </li>
        </ul>
    )
}

export default Nav;