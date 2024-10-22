import {courses} from '../Database';
import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation, Link } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import People from "./People";

export default function Courses() {
    const { cid } = useParams();
    const loc = useLocation();
    const course = courses.find((course) => course.id === cid);
    const navigationTitle = loc.pathname.split('/').filter(Boolean);
    const currentPage = navigationTitle[navigationTitle.length - 1] || "Home";

    return (
        <div id="wd-courses" className="p-6">
            <div className="breadcrumbs align-middle">
                <ul>
                    <li className="text-3xl font-bold ">
                        <Link to={`/Kanbas/Courses/${cid}/Home`}>
                            {course && course.name}
                        </Link>
                    </li>
                    <li className="text-xl">
                        {currentPage}
                    </li>
                </ul>
            </div>
            <hr/>

            <div className="flex mt-4">
                <div className="max-w-xs flex-shrink-0">
                    <CoursesNavigation />
                </div>

                <div className="w-full pl-6">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<People />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
