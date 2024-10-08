import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import People from "./People";

export default function Courses() {
    return (
        <div id="wd-courses" className="p-6">
            <h2 className="text-3xl font-bold mb-4">MUG 302: Musics from the Muggle World</h2>
            <hr />

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
