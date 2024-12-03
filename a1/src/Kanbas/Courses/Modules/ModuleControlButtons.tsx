import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {FaPlus} from "react-icons/fa";
import {MdDelete, MdEdit} from "react-icons/md";
import {useDispatch} from "react-redux";
import {deleteModule} from "../../store/reducer";
import {useState} from "react";
import NewModuleModal from "./NewModuleModal";
import {ModuleProps} from "../../shared/props/ModuleProps";

export default function ModuleControlButtons({courseId, module}: { courseId: string; module: ModuleProps }) {

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteModule({courseId: courseId, moduleId: module._id}));
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEdit = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="flex items-center justify-end space-x-2">
                <MdEdit className="text-2xl text-primary" onClick={handleEdit}/>
                <MdDelete className="text-2xl text-red-500" onClick={handleDelete}/>
                <GreenCheckmark/>
                <FaPlus className="text-2xl"/>
                <IoEllipsisVertical className="text-2xl"/>
            </div>

            {isModalOpen && (
                <NewModuleModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    courseId={courseId}
                    initialData={module}
                />
            )}
        </>
    );
}
