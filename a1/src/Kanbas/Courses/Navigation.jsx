import { Link } from "react-router-dom";

export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation" className="menu menu-compact bg-base-100 p-2 rounded-box w-full hidden md:block">
            <ul className="space-y-1">
                <li>
                    <Link id="wd-course-home-link" to="/Kanbas/Courses/1234/Home" className="menu-item font-semibold">
                        Home
                    </Link>
                </li>
                <li>
                    <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules" className="menu-item font-semibold">
                        Modules
                    </Link>
                </li>
                <li>
                    <Link id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza" className="menu-item font-semibold">
                        Piazza
                    </Link>
                </li>
                <li>
                    <Link id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom" className="menu-item font-semibold">
                        Zoom
                    </Link>
                </li>
                <li>
                    <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Assignments" className="menu-item font-semibold">
                        Assignments
                    </Link>
                </li>
                <li>
                    <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Quizzes" className="menu-item font-semibold">
                        Quizzes
                    </Link>
                </li>
                <li>
                    <Link id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades" className="menu-item font-semibold">
                        Grades
                    </Link>
                </li>
                <li>
                    <Link id="wd-course-people-link" to="/Kanbas/Courses/1234/People" className="menu-item font-semibold">
                        People
                    </Link>
                </li>
            </ul>
        </div>
    );
}
