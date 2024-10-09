import AssignmentControls from "./AssignmentControls";
import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentLeftButtonGroups from "./AssignmentLeftButtonGroups";

export default function Assignments() {
    return (
        <div id="wd-assignments" className="p-6">

            <AssignmentControls/>

            <ul id="wd-modules" className="space-y-6 mt-16">

                <li className="wd-module">
                    <div className="collapse border border-gray-300 rounded-lg">
                        <input type="checkbox" className="peer" defaultChecked/>
                        <div
                            className="collapse-title bg-base-300 text-info-content font-bold p-4 peer-checked:bg-base-300 flex justify-between items-center">
                            <div className="flex">
                                <BsGripVertical className="text-2xl mr-2"/>
                                <span>Assignments</span>
                            </div>
                            <AssignmentControlButtons/>
                        </div>
                        <div className="collapse-content p-0">
                            <ul>
                                <li className="wd-lesson p-4">
                                    <div className="flex items-center">
                                        <AssignmentLeftButtonGroups/>
                                        <div className="flex-grow text-left">
                                            <span className="block text-lg font-bold">A1</span>
                                            <span className="block"><a
                                                className="text-primary"> Multiple Modules</a> | <a
                                                className="font-semibold">Not available until</a> May 6 at 12:00am |</span>
                                            <span className="block"><a className="font-semibold">Due</a> May 13 at 11:59pm | 100 pts</span>
                                        </div>
                                        <LessonControlButtons/>
                                    </div>
                                </li>
                                <li className="wd-lesson p-4">
                                    <div className="flex items-center">
                                        <AssignmentLeftButtonGroups/>
                                        <div className="flex-grow text-left">
                                            <span className="block text-lg font-bold">A2</span>
                                            <span className="block"><a
                                                className="text-primary"> Multiple Modules</a> | <a
                                                className="font-semibold">Not available until</a> May 6 at 12:00am |</span>
                                            <span className="block"><a className="font-semibold">Due</a> May 13 at 11:59pm | 100 pts</span>
                                        </div>
                                        <LessonControlButtons/>
                                    </div>
                                </li>
                                <li className="wd-lesson p-4">
                                    <div className="flex items-center">
                                        <AssignmentLeftButtonGroups/>
                                        <div className="flex-grow text-left">
                                            <span className="block text-lg font-bold">A3</span>
                                            <span className="block"><a
                                                className="text-primary"> Multiple Modules</a> | <a
                                                className="font-semibold">Not available until</a> May 6 at 12:00am |</span>
                                            <span className="block"><a className="font-semibold">Due</a> May 13 at 11:59pm | 100 pts</span>
                                        </div>
                                        <LessonControlButtons/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

            </ul>


        </div>
    );
}
