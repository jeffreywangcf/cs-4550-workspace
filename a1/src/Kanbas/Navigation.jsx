import {Link} from "react-router-dom";

export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" className="space-y-4 min-w-52">
            <a
                href="https://www.wizardingworld.com/fact-file/locations/hogwarts"
                id="wd-neu-link"
                target="_blank"
                className="btn btn-primary w-full text-center"
            >
                Hogwarts School of Witchcraft and Wizardry
            </a>

            <Link
                to="/Kanbas/Account"
                id="wd-account-link"
                className="btn btn-ghost w-full text-left"
            >
                Account
            </Link>

            <Link
                to="/Kanbas/Dashboard"
                id="wd-dashboard-link"
                className="btn btn-ghost w-full text-left"
            >
                Dashboard
            </Link>

            <Link
                to="/Kanbas/Courses"
                id="wd-course-link"
                className="btn btn-ghost w-full text-left"
            >
                Courses
            </Link>

            <Link
                to="/Kanbas/Calendar"
                id="wd-calendar-link"
                className="btn btn-ghost w-full text-left"
            >
                Calendar
            </Link>

            <Link
                to="/Kanbas/Inbox"
                id="wd-inbox-link"
                className="btn btn-ghost w-full text-left"
            >
                Inbox
            </Link>

            <Link
                to="/Labs"
                id="wd-labs-link"
                className="btn btn-ghost w-full text-left"
            >
                Labs
            </Link>
        </div>
    );
}
