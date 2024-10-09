import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {FaPlus} from "react-icons/fa";

export default function ModuleControlButtons() {
    return (
        <div className="flex items-center justify-end space-x-2">
            <GreenCheckmark/>
            <FaPlus className="text-2xl"/>
            <IoEllipsisVertical className="text-2xl"/>
        </div>
    );
}