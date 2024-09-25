import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon

export default function TOC() {
    return (

        <ul className="menu bg-base-200 rounded-box w-56">
            <li className="menu-title">DIRECTORY</li>
            <li><Link to="/Labs">Labs</Link></li>
            <li><Link to="/Labs/Lab1">Lab 1</Link></li>
            <li><Link to="/Labs/Lab2">Lab 2</Link></li>
            <li><Link to="/Labs/Lab3">Lab 3</Link></li>
            <li><Link to="/Kanbas">Kanbas</Link></li>

            <li>
                <a href="https://github.com/jeffreywangcf/cs-4550-workspace" id="wd-github" target="_blank" rel="noopener noreferrer">
                    Repository on <FaGithub/>
                </a>
            </li>
        </ul>
    );
}
