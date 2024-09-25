import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";

export default function Courses() {
    return (
        <div id="wd-courses" className="p-6">
            <h2 className="text-3xl font-bold mb-4">MUG 302: Musics from the Muggle World</h2>
            <hr />
            <table className="w-full mt-4">
                <tr>
                    <td valign="top" className="max-w-60">
                        <CoursesNavigation />
                    </td>
                    <td valign="top" className="w-full pl-6">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                            <Route path="People" element={<h2>People</h2>} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}
