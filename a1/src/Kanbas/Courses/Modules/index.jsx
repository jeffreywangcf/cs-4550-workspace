import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModuleControls from "./ModuleControls";
import './styles.css'

import {modules} from "../../Database";
import {useParams} from "react-router-dom";

export default function Modules() {
    const {cid} = useParams();
    const weeksObj = modules.find((course) => course[cid]);
    if (!weeksObj || !weeksObj[cid]) {
        return <div className="alert-error m-4">No modules available.</div>;
    }
    const weeks = weeksObj[cid];

    return (<div className="p-6">
        <ModuleControls/>
        <ul id="wd-modules" className="space-y-6">
            {weeks.map((week) => (<li key={week._id} className="wd-module">
                <div className="collapse border border-gray-300 rounded-lg">
                    <input type="checkbox" className="peer" defaultChecked/>
                    <div
                        className="collapse-title bg-base-300 text-info-content font-bold p-4 peer-checked:bg-base-300 flex justify-between items-center">
                        <div className="flex">
                            <BsGripVertical className="text-2xl mr-2"/>
                            <span>{week.name}</span>
                        </div>
                        <ModuleControlButtons/>
                    </div>
                    <div className="collapse-content p-0">
                        <ul>
                            {week.lessons.map((lesson) => (<li key={lesson._id} className="wd-lesson p-4">
                                <div className="flex items-center">
                                    <BsGripVertical className="text-2xl mr-2"/>
                                    <span className="flex-grow text-left">{lesson.name}</span>
                                    <LessonControlButtons/>
                                </div>
                            </li>))}
                        </ul>
                    </div>
                </div>
            </li>))}
        </ul>
    </div>);
}
