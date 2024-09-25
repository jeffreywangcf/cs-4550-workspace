import {Link} from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="menu menu-sm bg-base-100 p-4 rounded-box">
            <ul>
                <li className="p-1">
                    <Link to="/Kanbas/Account/Signin" id="wd-signin-link" className="font-semibold">
                        Signin
                    </Link>
                </li>
                <li className="p-1">
                    <Link to="/Kanbas/Account/Signup" id="wd-signup-link" className="font-semibold">
                        Signup
                    </Link>
                </li>
                <li className="p-1">
                    <Link to="/Kanbas/Account/Profile" id="wd-profile-link" className="font-semibold">
                        Profile
                    </Link>
                </li>
            </ul>
        </div>
    );
}
