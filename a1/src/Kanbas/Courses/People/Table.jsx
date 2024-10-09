export default function PeopleTable() {
    return (
        <div id="wd-people-table" className="overflow-x-auto">
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
                <tr>
                    <td className="flex items-center">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img src="/images/avatars/professor-fig.png" alt="Avatar"/>
                            </div>
                        </div>
                        <span className="font-semibold ml-4">Eleazar Fig</span>
                    </td>
                    <td>123456789</td>
                    <td>0001</td>
                    <td>
                        <span className="badge badge-primary p-3">Instructor</span>
                    </td>
                    <td>1776-07-04</td>
                    <td>11:11:11</td>
                </tr>
                <tr>
                    <td className="flex items-center">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img src="/images/avatars/tom-riddle.png" alt="Avatar"/>
                            </div>
                        </div>
                        <span className="font-semibold ml-4">Tom Riddle</span>
                    </td>
                    <td>123456789</td>
                    <td>0001</td>
                    <td>
                        <span className="badge badge-secondary p-3">TA</span>
                    </td>
                    <td>1776-07-04</td>
                    <td>11:11:11</td>
                </tr>
                <tr>
                    <td className="flex items-center">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img src="/images/avatars/asp.png" alt="Avatar"/>
                            </div>
                        </div>
                        <span className="font-semibold ml-4">Albus S. Potter</span>
                    </td>
                    <td>123456789</td>
                    <td>0001</td>
                    <td>
                        <span className="badge badge-info p-3">Student</span>
                    </td>
                    <td>1776-07-04</td>
                    <td>11:11:11</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
