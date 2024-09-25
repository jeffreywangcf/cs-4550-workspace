import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <div id="wd-profile-screen" className="p-6 max-w-lg space-y-4">
            <h3 id="wd-profile-title" className="text-2xl font-semibold">Profile</h3>

            <input
                defaultValue="alice"
                placeholder="Username"
                className="input input-bordered w-full"
                id="wd-username"
            />

            <input
                defaultValue="123"
                placeholder="Password"
                type="password"
                className="input input-bordered w-full"
                id="wd-password"
            />

            <input
                defaultValue="Alice"
                placeholder="First Name"
                className="input input-bordered w-full"
                id="wd-firstname"
            />

            <input
                defaultValue="Wonderland"
                placeholder="Last Name"
                className="input input-bordered w-full"
                id="wd-lastname"
            />

            <input
                defaultValue="2000-01-01"
                type="date"
                className="input input-bordered w-full"
                id="wd-dob"
            />

            <input
                defaultValue="alice@wonderland"
                type="email"
                className="input input-bordered w-full"
                id="wd-email"
            />

            <select
                defaultValue="FACULTY"
                className="select select-bordered w-full"
                id="wd-role"
            >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>

            <div className="mt-4">
                <Link
                    to="/Kanbas/Account/Signin"
                    className="btn btn-primary"
                >
                    Sign out
                </Link>
            </div>
        </div>
    );
}
