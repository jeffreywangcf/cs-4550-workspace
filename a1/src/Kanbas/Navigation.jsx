import {Link, useLocation} from "react-router-dom";
import {navigationLinks} from "./Database";
import {FaHatWizard} from "react-icons/fa";
import {FaWandSparkles} from "react-icons/fa6";
import {GiMagicGate, GiOwl} from "react-icons/gi";
import {AiFillExperiment} from "react-icons/ai";
import {RiFilePaper2Line} from "react-icons/ri";

const icons = {
    GiMagicGate: GiMagicGate,
    FaWandSparkles: FaWandSparkles,
    RiFilePaper2Line: RiFilePaper2Line,
    GiOwl: GiOwl,
    AiFillExperiment: AiFillExperiment,
};

export default function KanbasNavigation() {
    const {pathname} = useLocation();

    return (
        <div id="wd-kanbas-navigation"
             className="menu menu-vertical w-28 bg-base-200 fixed h-full space-y-2 shadow-lg  hidden md:block">
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
                    <FaHatWizard className="text-2xl"/>
                    <span className="text-sm font-semibold">Account</span>
                </Link>
            </li>

            {navigationLinks.map((link) => {
                const Icon = icons[link.icon];
                return (
                    <li>
                        <Link
                            to={link.path}
                            id="wd-dashboard-link"
                            className="flex flex-col items-center justify-center p-2"
                        >
                            <Icon className="text-2xl"/>
                            <span className="text-sm font-semibold">{link.label}</span>
                        </Link>
                    </li>
                );
            })}
        </div>
    );
}
