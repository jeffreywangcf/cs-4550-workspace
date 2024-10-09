import {BsGripVertical} from "react-icons/bs";
import {BiEditAlt} from "react-icons/bi";

export default function AssignmentLeftButtonGroups() {
    return (
        <div className="flex items-center justify-end space-x-2 mr-4">
            <BsGripVertical className="text-2xl"/>
            <a href="#/Kanbas/Courses/1234/Assignments/123">
                <BiEditAlt className="text-2xl"/>
            </a>
        </div>
    );
}