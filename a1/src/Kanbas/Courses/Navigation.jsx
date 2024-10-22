import { Link, useParams } from "react-router-dom";

export default function CoursesNavigation() {
    const { cid } = useParams();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    return (
        <div id="wd-courses-navigation" className="menu menu-compact bg-base-100 p-2 rounded-box w-full hidden md:block">
            <ul className="space-y-1">
                {links.map((link) => (
                    <li>
                        <Link
                            id={`wd-course-${link.toLowerCase()}-link`}
                            to={`/Kanbas/Courses/${cid}/${link}`}
                            className="menu-item font-semibold"
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
