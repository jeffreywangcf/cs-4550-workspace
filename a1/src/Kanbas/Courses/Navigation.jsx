import {Link} from "react-router-dom";

export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation" className="menu menu-sm bg-base-100 p-4 rounded-box max-w-44">
            <ul>
                <li className="p-1">
                    <Link id="wd-course-home-link" to="/Kanbas/Courses/1234/Home" className="font-semibold">
                        Home
                    </Link>
                </li>
                <li className="p-1">
                    <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules" className="font-semibold">
                        Modules
                    </Link>
                </li>
                <li className="p-1">
                    <Link id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza" className="font-semibold">
                        Piazza
                    </Link>
                </li>
                <li className="p-1">
                    <Link id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom" className="font-semibold">
                        Zoom
                    </Link>
                </li>
                <li className="p-1">
                    <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments" className="font-semibold">
                        Assignments
                    </Link>
                </li>
                <li className="p-1">
                    <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes" className="font-semibold">
                        Quizzes
                    </Link>
                </li>
                <li className="p-1">
                    <Link id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades" className="font-semibold">
                        Grades
                    </Link>
                </li>
                <li className="p-1">
                    <Link id="wd-course-people-link" to="/Kanbas/People" className="font-semibold">
                        People
                    </Link>
                </li>
            </ul>
        </div>
    );
}
