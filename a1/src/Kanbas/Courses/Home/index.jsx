import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <table id="wd-home">
            <tr>
                <td valign="top" className="w-3/4">
                    <Modules />
                </td>
                <td valign="top" className="w-1/4">
                    <CourseStatus />
                </td>
            </tr>
        </table>
    );
}
