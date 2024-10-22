import {useParams} from "react-router-dom";
import {prettyMinutes} from "../../../Utils/time";
import {people} from "../../Database";

export default function PeopleTable() {
    const {cid} = useParams();
    const ppl = people.people.filter(person => person.courses.includes(cid));

    return (<div id="wd-people-table" className="overflow-x-auto">
        <table className="table w-full table-zebra">
            <thead>
            <tr>
                <th>Name</th>
                <th>Login ID</th>
                <th>Section</th>
                <th>Role</th>
                <th>Last Activity</th>
                <th>Total Activity</th>
            </tr>
            </thead>
            <tbody>
            {ppl.map((person) => (<tr key={person.id}>
                <td className="flex items-center">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={person.img} alt="Avatar"/>
                        </div>
                    </div>
                    <span className="font-semibold ml-4">{person.name}</span>
                </td>
                <td>{person.loginId}</td>
                <td>{person.section}</td>
                <td>
                    <span
                        className={`badge p-3 ${person.role === "Instructor" ? "badge-primary" : 
                            person.role === "Teaching Assistant" ? "badge-secondary" : "badge-info"}`}>
                        {person.role}
                    </span>
                </td>
                <td>{person.lastActivity}</td>
                <td>{prettyMinutes(person.totalActivity)}</td>
            </tr>))}
            </tbody>
        </table>
    </div>);
}
