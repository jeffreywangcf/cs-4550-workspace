import {BsGripVertical} from "react-icons/bs";
import {BiEditAlt} from "react-icons/bi";
import {Link} from "react-router-dom";

export default function AssignmentLeftButtonGroups({cid, aid}) {
    return (<div className="flex items-center justify-end space-x-2 mr-4">
            <BsGripVertical className="text-2xl"/>
            <Link to={`/Kanbas/Courses/${cid}/Assignments/${aid}`}>
                <BiEditAlt className="text-2xl"/>
            </Link>
        </div>);
}