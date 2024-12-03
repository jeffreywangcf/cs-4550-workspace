import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModuleControls from "./ModuleControls";
import "./styles.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import NewModuleModal from "./NewModuleModal";
import {useState} from "react";
import {ModuleProps} from "../../shared/props/ModuleProps";

export default function Modules() {
    const { cid } = useParams<{ cid: string }>();
    const courses = useSelector((state: RootState) => state.courses.courses);
    const course = courses.find(course => course.id === cid);

    const [isModalOpen, setIsModalOpen] = useState(false);


    const modules: ModuleProps[] = course ? course.modules : [];

    const handleAddModule = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    return (
        <div className="p-6">
            <ModuleControls onAddModule={handleAddModule} />
            <ul id="wd-modules" className="space-y-6">
                {modules.map(module => (
                    <li key={module._id} className="wd-module">
                        <div className="border border-gray-300 rounded-lg">
                            <div
                                className="bg-base-300 text-info-content font-bold p-4 peer-checked:bg-base-300 flex justify-between items-center"
                            >
                                <div className="flex">
                                    <BsGripVertical className="text-2xl mr-2" />
                                    <span>{module.name}</span>
                                </div>
                                <ModuleControlButtons courseId={course!.id} module={module} />
                            </div>
                            <div className="p-0">
                                <ul>
                                    {module.lessons.map(lesson => (
                                        <li key={lesson._id} className="wd-lesson p-4">
                                            <div className="flex items-center">
                                                <BsGripVertical className="text-2xl mr-2" />
                                                <span className="flex-grow text-left">
                                                    {lesson.name}
                                                </span>
                                                <LessonControlButtons />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <NewModuleModal
                isOpen={isModalOpen}
                onClose={closeModal}
                courseId={course!.id}
            />
        </div>
    );
}
