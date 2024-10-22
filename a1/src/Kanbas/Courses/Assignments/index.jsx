import AssignmentControls from "./AssignmentControls";
import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentLeftButtonGroups from "./AssignmentLeftButtonGroups";
import {assignments} from "../../Database";
import {useParams} from "react-router-dom";

export default function Assignments() {
    const {cid} = useParams();
    const courseAssignments = assignments[cid];
    if (!courseAssignments || courseAssignments.length === 0) {
        return <div className="alert-error m-4">No assignments available.</div>;
    }
    return (<div id="wd-assignments" className="p-6">

        <AssignmentControls/>

        <ul id="wd-modules" className="space-y-6 mt-16">
            <li className="wd-module">
                <div className="collapse border border-gray-300 rounded-lg">
                    <input type="checkbox" className="peer" defaultChecked/>
                    <div
                        className="collapse-title bg-base-300 text-info-content font-bold p-4
                        peer-checked:bg-base-300 flex justify-between items-center">
                        <div className="flex">
                            <BsGripVertical className="text-2xl mr-2"/>
                            <span>Assignments</span>
                        </div>
                        <AssignmentControlButtons/>
                    </div>
                    <div className="collapse-content p-0">
                        <ul>
                            {courseAssignments.map((assignment) => (<li key={assignment.id} className="wd-lesson p-4">
                                <div className="flex items-center">
                                    <AssignmentLeftButtonGroups cid={cid} aid={assignment.id}/>
                                    <div className="flex-grow text-left">
                                        <span className="block text-lg font-bold">{assignment.name}</span>
                                        <span className="block">
                                                    <a className="text-primary"> Multiple Modules</a> | <a
                                            className="font-semibold">Available from</a>
                                            {new Date(assignment.availableFrom).toLocaleString()} |
                                                </span>
                                        <span className="block"><a className="font-semibold">Due </a>
                                            {new Date(assignment.dueDate).toLocaleString()} | {assignment.points} pts
                                                </span>
                                    </div>
                                    <LessonControlButtons/>
                                </div>
                            </li>))}
                        </ul>
                    </div>
                </div>
            </li>
        </ul>


    </div>);
}
