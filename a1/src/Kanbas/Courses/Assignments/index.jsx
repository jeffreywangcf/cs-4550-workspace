export default function Assignments() {
    return (
        <div id="wd-assignments" className="p-6 space-y-4">
            <div className="join flex items-center">
                <div className="relative join-item">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered pl-10 join-item"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-6 w-6 opacity-70 absolute top-1/2 transform -translate-y-1/2 left-2"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <button className="btn btn-secondary join-item">
                    + Group
                </button>
                <button className="btn btn-primary join-item">
                    + Assignment
                </button>
            </div>

            <div className="flex items-center align-middle pt-12">
                <h3 id="wd-assignments-title" className="text-3xl font-bold">
                    Assignments <span className="italic font-medium">(40% of Total)</span>
                </h3>
                <button className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </button>
            </div>

            <ul id="wd-assignment-list" className="list-disc list-inside space-y-4 pl-4">
                <li className="wd-assignment-list-item">
                    <a className="link-primary font-bold text-xl" href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML
                    </a>
                    <div className="mt-2">
                        <p className="pl-5">Multiple Modules | <span
                            className="font-bold">Not available until</span> May 6 at 12:00am</p>
                        <p className="pl-5"><span className="font-bold">Due</span> May 13 at 11:59pm | 100 pts</p>
                    </div>
                </li>

                <li className="wd-assignment-list-item">
                    <a className="link-primary font-bold text-xl" href="#/Kanbas/Courses/1234/Assignments/123">
                        A2 - CSS + Bootstrap
                    </a>
                    <div className="mt-2">
                        <p className="pl-5">Multiple Modules | <span
                            className="font-bold">Not available until</span> May 6 at 12:00am</p>
                        <p className="pl-5"><span className="font-bold">Due</span> May 13 at 11:59pm | 100 pts</p>
                    </div>
                </li>

                <li className="wd-assignment-list-item">
                    <a className="link-primary font-bold text-xl" href="#/Kanbas/Courses/1234/Assignments/123">
                        A3 - JS
                    </a>
                    <div className="mt-2">
                        <p className="pl-5">Multiple Modules | <span
                            className="font-bold">Not available until</span> May 6 at 12:00am</p>
                        <p className="pl-5"><span className="font-bold">Due</span> May 13 at 11:59pm | 100 pts</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}
