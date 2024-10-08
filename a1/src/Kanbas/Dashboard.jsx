import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard" className="p-6">
            <h1 id="wd-dashboard-title" className="text-4xl font-bold mb-4">Dashboard</h1>
            <hr className="mb-6"/>

            <h2 id="wd-dashboard-published" className="text-2xl font-semibold mb-4">Published Courses (8)</h2>
            <hr className="mb-6"/>

            <div id="wd-dashboard-courses" className="grid grid-cols-[repeat(auto-fit,minmax(16rem,16rem))] gap-8">

                <div className="card w-64 h-80 bg-base-100 shadow-lg">
                    <Link to="/Kanbas/Courses/1234/Home">
                        <figure className="rounded-t-2xl">
                            <img src="/images/courses/TRS201-cover.png" alt="React JS"
                                 className="w-full h-40 object-center"/>
                        </figure>
                        <div className="card-body pt-4">
                            <h2 className="card-title">TRS 201</h2>
                            <p>Transfiguration II</p>
                            <p className="text-sm opacity-70">TRS201.1234 Fall 2024</p>
                        </div>
                    </Link>
                </div>
                <div className="card w-64 h-80 bg-base-100 shadow-lg">
                    <Link to="/Kanbas/Courses/1234/Home">
                        <figure className="rounded-t-2xl">
                            <img src="/images/courses/DADA441-cover.png" alt="React JS"
                                 className="w-full h-40 object-center"/>
                        </figure>
                        <div className="card-body pt-4">
                            <h2 className="card-title">DADA 441</h2>
                            <p>Defense Against Unforgivable Curses</p>
                            <p className="text-sm opacity-70">DADA 411.1234 Fall 2024</p>
                        </div>
                    </Link>
                </div>
                <div className="card w-64 h-80 bg-base-100 shadow-lg">
                    <Link to="/Kanbas/Courses/1234/Home">
                        <figure className="rounded-t-2xl">
                            <img src="/images/courses/RAV01-cover.png" alt="React JS"
                                 className="w-full h-40 object-center"/>
                        </figure>
                        <div className="card-body pt-4">
                            <h2 className="card-title">RAV 01</h2>
                            <p>Ravenclaw First Year Seminar</p>
                            <p className="text-sm opacity-70">RAV01.1234 Fall 2024</p>
                        </div>
                    </Link>
                </div>
                <div className="card w-64 h-80 bg-base-100 shadow-lg">
                    <Link to="/Kanbas/Courses/1234/Home">
                        <figure className="rounded-t-2xl">
                            <img src="/images/courses/MUG302-cover.png" alt="React JS"
                                 className="w-full h-40 object-center"/>
                        </figure>
                        <div className="card-body pt-4">
                            <h2 className="card-title">MUG 302</h2>
                            <p>Music of the Muggle World</p>
                            <p className="text-sm opacity-70">MUG302.1234 Fall 2024</p>
                        </div>
                    </Link>
                </div>
                <div className="card w-64 h-80 bg-base-100 shadow-lg">
                    <Link to="/Kanbas/Courses/1234/Home">
                        <figure className="rounded-t-2xl">
                            <img src="/images/courses/OWL500-cover.png" alt="React JS"
                                 className="w-full h-40 object-center"/>
                        </figure>
                        <div className="card-body pt-4">
                            <h2 className="card-title">OWL 501</h2>
                            <p>Ordinary Wizarding Level Exam Preparation</p>
                            <p className="text-sm opacity-70">OWL501.1234 Fall 2024</p>
                        </div>
                    </Link>
                </div>
                <div className="card w-64 h-80 bg-base-100 shadow-lg">
                    <Link to="/Kanbas/Courses/1234/Home">
                        <figure className="rounded-t-2xl">
                            <img src="/images/courses/POT105-cover.png" alt="React JS"
                                 className="w-full h-40 object-center"/>
                        </figure>
                        <div className="card-body pt-4">
                            <h2 className="card-title">POT 105</h2>
                            <p>Potion I</p>
                            <p className="text-sm opacity-70">POT105.1234 Fall 2024</p>
                        </div>
                    </Link>
                </div>
                <div className="card w-64 h-80 bg-base-100 shadow-lg">
                    <Link to="/Kanbas/Courses/1234/Home">
                        <figure className="rounded-t-2xl">
                            <img src="/images/courses/POT105-cover.png" alt="React JS"
                                 className="w-full h-40 object-center"/>
                        </figure>
                        <div className="card-body pt-4">
                            <h2 className="card-title">POT 106</h2>
                            <p>Lab for Potion I</p>
                            <p className="text-sm opacity-70">POT105.1234 Fall 2024</p>
                        </div>
                    </Link>
                </div>
                <div className="card w-64 h-80 bg-base-100 shadow-lg">
                    <Link to="/Kanbas/Courses/1234/Home">
                        <figure className="rounded-t-2xl">
                            <img src="/images/courses/DADA320-cover.png" alt="React JS"
                                 className="w-full h-40 object-center"/>
                        </figure>
                        <div className="card-body pt-4">
                            <h2 className="card-title">DADA 320</h2>
                            <p>Patronus Theory and Application</p>
                            <p className="text-sm opacity-70">DADA 320.1234 Fall 2024</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
