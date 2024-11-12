import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import {FaGithub} from "react-icons/fa";

export default function TOC() {
    const {pathname} = useLocation();
    const labCount = 4;
    return (
        <ul className="menu bg-base-200 rounded-box w-56 space-y-1">
            <li className="menu-title">DIRECTORY</li>
            <li>
                <Link to="/Labs">Labs</Link>
            </li>

            {Array.from({length: labCount}, (_, i) => `Lab${i + 1}`).map(lab => (
                <li>
                    <Link
                        className={`nav-link ${pathname.includes(lab) ? "active" : ""}`}
                        to={`/Labs/${lab}`}
                    >
                        {lab.replace("Lab", "Lab ")}
                    </Link>
                </li>
            ))}

            <li>
                <Link to="/Kanbas">Kanbas</Link>
            </li>
            <li>
                <a
                    href="https://github.com/jeffreywangcf/cs-4550-workspace"
                    id="wd-github"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Repository on <FaGithub/>
                </a>
            </li>
        </ul>
    );
}
