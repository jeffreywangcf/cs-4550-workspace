import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen" className="p-6 max-w-lg space-y-4">
            <h3 id="wd-signin-title" className="text-2xl font-semibold">Sign in</h3>

            <input
                className="input input-bordered w-full"
                placeholder="Username"
                id="wd-username"
            />

            <input
                className="input input-bordered w-full"
                placeholder="Password"
                type="password"
                id="wd-password"
            />

            <div className="mt-4">
                <Link
                    id="wd-signin-btn"
                    to="/Kanbas/Dashboard"
                    className="btn btn-primary w-full"
                >
                    Sign in
                </Link>
            </div>

            <div className="text-sm mt-2">
                <Link
                    id="wd-signup-link"
                    to="/Kanbas/Account/Signup"
                    className="btn btn-primary btn-outline w-full"
                >
                    Sign up
                </Link>
            </div>
        </div>
    );
}
