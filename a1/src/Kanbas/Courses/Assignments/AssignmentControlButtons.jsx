import {FaPlus} from "react-icons/fa";
import {IoEllipsisVertical} from "react-icons/io5";

export default function AssignmentControlButtons() {
    return (
        <div className="flex items-center justify-end space-x-4">
            <div className="badge badge-lg badge-outline">40% of Total</div>
            <FaPlus className="text-2xl"/>
            <IoEllipsisVertical className="text-2xl"/>
        </div>
    );
}