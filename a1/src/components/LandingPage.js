import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {FaGithub} from "react-icons/fa";

const LandingPage = () => {
    const [theme, setTheme] = useState('winter');

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
        document.querySelector('html').style.transition = 'background-color 0.5s ease';
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'winter' ? 'dim' : 'winter');
    };

    return (
        <div className="min-h-screen flex flex-col items-start p-32 pt-32 relative">
            <a
                href="https://jeffreywangcf.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-8 right-20 font-bold hover:underline">
                About
            </a>


            <button
                onClick={toggleTheme}
                className="absolute top-8 right-8 flex items-center justify-center focus:outline-none">
                {theme === 'winter' ? (

                    <svg id="sun-icon" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"></circle>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
                    </svg>
                )}
            </button>

            <h1 className="text-7xl primary-content font-extrabold mb-4">
                👋 Hello,
            </h1>
            <p className="text-5xl primary-content font-bold pt-4">
                You've come to the landing page of <br/>my
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mx-2">
                    CS 4550
                </span>
                projects.
            </p>

            <div className="w-1/4 mt-8 space-y-2">
                <p className="text-2xl w-full">name: Jeffrey Wang</p>
                <p className="text-2xl w-full">section: 02</p>
                <a href="https://github.com/jeffreywangcf/cs-4550-workspace" id="wd-github" target="_blank" rel="noopener noreferrer"
                   className="text-2xl w-full btn">
                    Repository on <FaGithub/>
                </a>
            </div>

            <div className="overflow-x-auto w-1/2 pt-12">
                <table className="table table-zebra w-full">

                    <tbody>
                    <tr>
                        <th>1</th>
                        <td className="text-xl">a1: Kanbas</td>
                        <td>
                            <Link to="/Kanbas" className="btn btn-sm btn-primary min-w-12">go</Link>
                        </td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td className="text-xl">Labs</td>
                        <td>
                            <Link to="/#/labs" className="btn btn-sm btn-primary min-w-12">go</Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
);
};

export default LandingPage;
