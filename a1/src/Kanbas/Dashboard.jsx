import {Link} from "react-router-dom";
import courses from "./Database/courses.json"

export default function Dashboard() {
    return (
        <div id="wd-dashboard" className="p-6">
            <h1 id="wd-dashboard-title" className="text-4xl font-bold mb-4">Dashboard</h1>
            <hr className="mb-6"/>

            <h2 id="wd-dashboard-published" className="text-2xl font-semibold mb-4">Published Courses (8)</h2>
            <hr className="mb-6"/>

            <div id="wd-dashboard-courses" className="grid grid-cols-[repeat(auto-fit,minmax(16rem,16rem))] gap-8">

                {courses.map((course) => (
                    <div className="card w-64 h-80 bg-base-100 shadow-lg" key={course.id}>
                        <Link to={course.link}>
                            <figure className="rounded-t-2xl">
                                <img
                                    src={course.image}
                                    alt={course.name}
                                    className="w-full h-40 object-center"
                                />
                            </figure>
                            <div className="card-body pt-4">
                                <h2 className="card-title">{course.id}</h2>
                                <p>{course.name}</p>
                                <p className="text-sm opacity-70">{course.courseCode} {course.semester}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="alert mt-8 w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 stroke-current">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                    <span>Image generated with </span>
                    <a href="https://github.com/lllyasviel/Fooocus" target="_blank" rel="noopener noreferrer"
                       className="underline font-bold">
                        Fooocus
                    </a>
                </div>
            </div>
        </div>
    );
}
