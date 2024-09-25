import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard" className="p-6">
            <h1 id="wd-dashboard-title" className="text-4xl font-bold mb-4">Dashboard</h1>
            <hr className="mb-6"/>

            <h2 id="wd-dashboard-published" className="text-2xl font-semibold mb-4">Published Courses (5)</h2>
            <hr className="mb-6"/>

            <div id="wd-dashboard-courses" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="card w-full bg-base-100 shadow-xl">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <figure className="rounded-t-2xl">
                            <img src="/images/TRS201-cover.png" alt="React JS" className="w-full h-48 object-cover"/>
                        </figure>
                        <div className="card-body">
                            <h5 className="card-title text-xl font-bold">
                                TRS 201
                            </h5>
                            <p className="wd-dashboard-course-title text-info-content">
                                Transfiguration II
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <figure className="rounded-t-2xl">
                            <img src="/images/DADA441-cover.png" alt="React JS" className="w-full h-48 object-cover"/>
                        </figure>
                        <div className="card-body">
                            <h5 className="card-title text-xl font-bold">
                                DADA 441
                            </h5>
                            <p className="wd-dashboard-course-title text-info-content">
                                Defense Against Unforgivable Curses
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <figure className="rounded-t-2xl">
                            <img src="/images/RAV01-cover.png" alt="React JS" className="w-full h-48 object-cover"/>
                        </figure>
                        <div className="card-body">
                            <h5 className="card-title text-xl font-bold">
                                RAV 01
                            </h5>
                            <p className="wd-dashboard-course-title text-info-content">
                                Ravenclaw First Year Seminar
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <figure className="rounded-t-2xl">
                            <img src="/images/MUG302-cover.png" alt="React JS" className="w-full h-48 object-cover"/>
                        </figure>
                        <div className="card-body">
                            <h5 className="card-title text-xl font-bold">
                                MUG 302
                            </h5>
                            <p className="wd-dashboard-course-title text-info-content">
                                Musics from the Muggle World
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <figure className="rounded-t-2xl">
                            <img src="/images/OWL500-cover.png" alt="React JS" className="w-full h-48 object-cover"/>
                        </figure>
                        <div className="card-body">
                            <h5 className="card-title text-xl font-bold">
                                OWL 500
                            </h5>
                            <p className="wd-dashboard-course-title text-info-content">
                                Introduction to Ordinary Wizarding Level Exam
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
