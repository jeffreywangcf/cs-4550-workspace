import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModuleControls from "./ModuleControls";
import './styles.css'

export default function Modules() {
    return (
        <div className="p-6">

            <ModuleControls/>

            <ul id="wd-modules" className="space-y-6">

                <li className="wd-module">
                    <div className="collapse border border-gray-300 rounded-lg">
                        <input type="checkbox" className="peer" defaultChecked/>
                        <div
                            className="collapse-title bg-base-300 text-info-content font-bold p-4 peer-checked:bg-base-300 flex justify-between items-center">
                            <div className="flex">
                                <BsGripVertical className="text-2xl mr-2"/>
                                <span>Week 1</span>
                            </div>
                            <ModuleControlButtons/>
                        </div>
                        <div className="collapse-content p-0">
                            <ul>
                                <li className="wd-lesson p-4">
                                    <div className="flex items-center">
                                        <BsGripVertical className="text-2xl mr-2"/>
                                        <span className="flex-grow text-left">Introduction to the course</span>
                                        <LessonControlButtons/>
                                    </div>
                                </li>
                                <li className="wd-lesson p-4">
                                    <div className="flex items-center">
                                        <BsGripVertical className="text-2xl mr-2"/>
                                        <span className="flex-grow text-left">Lesson 1</span>
                                        <LessonControlButtons/>
                                    </div>
                                </li>
                                <li className="wd-lesson p-4">
                                    <div className="flex items-center">
                                        <BsGripVertical className="text-2xl mr-2"/>
                                        <span className="flex-grow text-left">Lesson 2</span>
                                        <LessonControlButtons/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li className="wd-module">
                    <div className="collapse border border-gray-300 rounded-lg">
                        <input type="checkbox" className="peer" defaultChecked/>
                        <div
                            className="collapse-title bg-base-300 text-info-content font-bold p-4 peer-checked:bg-base-300 flex justify-between items-center">
                            <div className="flex">
                                <BsGripVertical className="text-2xl mr-2"/>
                                <span>Week 2 - Introduction to Web Development</span>
                            </div>
                            <ModuleControlButtons/>
                        </div>
                        <div className="collapse-content p-0">
                            <ul>
                                <li className="wd-lesson p-4">
                                    <div className="flex items-center">
                                        <BsGripVertical className="text-2xl mr-2"/>
                                        <span className="flex-grow text-left">HTML, CSS</span>
                                        <LessonControlButtons/>
                                    </div>
                                </li>
                                <li className="wd-lesson p-4">
                                    <div className="flex items-center">
                                        <BsGripVertical className="text-2xl mr-2"/>
                                        <span className="flex-grow text-left">JavaScript</span>
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
