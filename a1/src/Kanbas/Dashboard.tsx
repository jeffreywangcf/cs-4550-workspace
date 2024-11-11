import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as db from "./Database";
import NewCourseModal from "./NewCourseModal";

export interface CourseProp {
    id: string;
    name: string;
    courseCode: string;
    semester: string;
    image: string;
    description: string;
    link: string;
}

export default function Dashboard() {

    const navigate = useNavigate();

    const [courses, setCourses] = useState<CourseProp[]>(db.courses);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<CourseProp | null>(null);

    const openModal = (course: CourseProp | null = null) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const closeModal = (newCourse: CourseProp | null) => {
        setIsModalOpen(false);
        if (newCourse) {
            setCourses((c) =>
                c.some((course) => course.id === newCourse.id)
                    ? c.map((course) => (course.id === newCourse.id ? newCourse : course))
                    : [...c, newCourse]
            );
        }
    };

    const handleDelete = (id: string) => {
        setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
    };

    return (
        <div id="wd-dashboard" className="p-6">
            <h1 id="wd-dashboard-title" className="text-4xl font-bold mb-4">
                Dashboard
            </h1>
            <hr className="mb-6"/>

            <div className="flex w-full justify-between">
                <span className="text-xl font-bold">New Course</span>
                <button onClick={() => openModal(null)} className="btn btn-primary min-w-24">Add</button>
            </div>

            <h2 id="wd-dashboard-published" className="text-2xl font-semibold mb-4">
                Published Courses ({courses.length})
            </h2>
            <hr className="mb-6"/>

            <div
                id="wd-dashboard-courses"
                className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8"
            >
                {courses.map((course) => (
                    <div className="card min-w-64 h-96 bg-base-100 shadow-lg" key={course.id}>
                        <Link to={course.link}>
                            <figure className="rounded-t-2xl">
                                <img
                                    src={course.image}
                                    alt={course.name}
                                    className="w-full h-44 object-cover"
                                />
                            </figure>
                            <div className="card-body pt-4 h-36">
                                <h2 className="card-title">{course.id}</h2>
                                <p>{course.name}</p>
                                <p className="text-sm opacity-70">
                                    {course.courseCode} {course.semester}
                                </p>
                            </div>
                        </Link>
                        <div className='flex justify-between pl-4 pr-4'>
                            <button className="btn btn-primary" onClick={() => {navigate(course.link)}}>Go</button>
                            <div className="join join-horizontal">
                                <button className="btn btn-secondary join-item" onClick={() => openModal(course)}>Edit
                                </button>
                                <button className="btn btn-accent join-item"
                                        onClick={() => handleDelete(course.id)}>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <NewCourseModal
                isOpen={isModalOpen}
                onClose={closeModal}
                initialData={selectedCourse}
            />
        </div>
    );
}
