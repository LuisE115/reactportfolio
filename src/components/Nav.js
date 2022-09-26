import React from 'react';

function Nav({ currentPage, handlePageChange}) {
    return (
        <ul className="navsec">
            <li className="navi">
                <a href="#about" onClick={() => handlePageChange('About')}
                className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
                    About
                </a>
            </li>
            <li className="navi">
                <a href="#project" onClick={() => handlePageChange('Project')}
                className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
                    Projects
                </a>
            </li>
            <li className="navi">
                <a href="#contact" onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
        </ul>
    )
}

export default Nav;