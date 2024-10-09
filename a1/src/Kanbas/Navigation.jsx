import { Link } from "react-router-dom";
import { FaHatWizard } from "react-icons/fa";
import { FaWandSparkles } from "react-icons/fa6";
import { GiMagicGate, GiOwl } from "react-icons/gi";
import { AiFillExperiment } from "react-icons/ai";
import { RiFilePaper2Line } from "react-icons/ri";

export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" className="menu menu-vertical w-28 bg-base-200 fixed h-full space-y-2 shadow-lg  hidden md:block">
            <li className="mb-2">
                <a
                    href="https://www.wizardingworld.com/fact-file/locations/hogwarts"
                    id="wd-neu-link"
                    target="_blank"
                    className="flex flex-col items-center justify-center"
                >
                    <img
                        src="/images/icons/hogwarts-crest.png"
                        alt="Hogwarts School of Witchcraft and Wizardry"
                        className="w-24 h-auto"
                    />
                </a>
            </li>

            <li>
                <Link
                    to="/Kanbas/Account"
                    id="wd-account-link"
                    className="flex flex-col items-center justify-center p-2 hover:bg-base-300"
                >
                    <FaHatWizard className="text-2xl" />
                    <span className="text-sm font-semibold">Account</span>
                </Link>
            </li>

            <li>
                <Link
                    to="/Kanbas/Dashboard"
                    id="wd-dashboard-link"
                    className="flex flex-col items-center justify-center p-2"
                >
                    <GiMagicGate className="text-2xl" />
                    <span className="text-sm font-semibold">Dashboard</span>
                </Link>
            </li>

            <li>
                <Link
                    to="/Kanbas/Courses"
                    id="wd-course-link"
                    className="flex flex-col items-center justify-center p-2 hover:bg-base-300"
                >
                    <FaWandSparkles className="text-2xl mb-1" />
                    <span className="text-sm font-semibold">Courses</span>
                </Link>
            </li>

            <li>
                <Link
                    to="/Kanbas/Calendar"
                    id="wd-calendar-link"
                    className="flex flex-col items-center justify-center p-2 hover:bg-base-300"
                >
                    <RiFilePaper2Line className="text-2xl" />
                    <span className="text-sm font-semibold">Calendar</span>
                </Link>
            </li>

            <li>
                <Link
                    to="/Kanbas/Inbox"
                    id="wd-inbox-link"
                    className="flex flex-col items-center justify-center p-2 hover:bg-base-300"
                >
                    <GiOwl className="text-2xl" />
                    <span className="text-sm font-semibold">Inbox</span>
                </Link>
            </li>

            <li>
                <Link
                    to="/Labs"
                    id="wd-labs-link"
                    className="flex flex-col items-center justify-center p-2 hover:bg-base-300"
                >
                    <AiFillExperiment className="text-2xl" />
                    <span className="text-sm font-semibold">Labs</span>
                </Link>
            </li>
        </div>
    );
}
