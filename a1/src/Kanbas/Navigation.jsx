import {Link} from "react-router-dom";
import {FaHatWizard} from "react-icons/fa";
import {FaWandSparkles} from "react-icons/fa6";
import {GiMagicGate, GiOwl} from "react-icons/gi";
import {AiFillExperiment} from "react-icons/ai";
import {RiFilePaper2Line} from "react-icons/ri";

export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" className="space-y-2">
            <a
                href="https://www.wizardingworld.com/fact-file/locations/hogwarts"
                id="wd-neu-link"
                target="_blank"
                className="flex items-center justify-center p-2 rounded-lg hover:bg-base-300"
            >
                <img
                    src="/images/icons/hogwarts-crest.png"
                    alt="Hogwarts School of Witchcraft and Wizardry"
                    className="w-24 h-auto"
                />
            </a>

            <Link
                to="/Kanbas/Account"
                id="wd-account-link"
                className="w-full text-left flex flex-col items-center justify-center p-2 rounded-lg hover:bg-base-300"
            >
                <FaHatWizard className="text-2xl mb-1"/>
                <a className="text-sm font-semibold">Account</a>
            </Link>

            <Link
                to="/Kanbas/Dashboard"
                id="wd-dashboard-link"
                className="w-full text-left flex flex-col items-center justify-center p-2 rounded-lg bg-primary"
            >
                <GiMagicGate className="text-2xl mb-1 text-primary-content"/>
                <a className="text-sm font-semibold text-primary-content">Dashboard</a>
            </Link>

            <Link
                to="/Kanbas/Courses"
                id="wd-course-link"
                className="w-full text-left flex flex-col items-center justify-center p-2 rounded-lg hover:bg-base-300"
            >
                <FaWandSparkles className="text-2xl mb-1"/>
                <a className="text-sm font-semibold">Courses</a>
            </Link>

            <Link
                to="/Kanbas/Calendar"
                id="wd-calendar-link"
                className="w-full text-left flex flex-col items-center justify-center p-2 rounded-lg hover:bg-base-300"
            >
                <RiFilePaper2Line className="text-2xl mb-1"/>
                <a className="text-sm font-semibold">Calendar</a>
            </Link>

            <Link
                to="/Kanbas/Inbox"
                id="wd-inbox-link"
                className="w-full text-left flex flex-col items-center justify-center p-2 rounded-lg hover:bg-base-300"
            >
                <GiOwl className="text-2xl mb-1"/>
                <a className="text-sm font-semibold">Inbox</a>
            </Link>

            <Link
                to="/Labs"
                id="wd-labs-link"
                className="w-full text-left flex flex-col items-center justify-center p-2 rounded-lg hover:bg-base-300"
            >
                <AiFillExperiment className="text-2xl mb-1"/>
                <a className="text-sm font-semibold">Labs</a>
            </Link>
        </div>
    );
}
