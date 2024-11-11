import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    const [courses, setCourses] = useState<CourseProp[]>(db.courses);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = (newCourse: CourseProp | null) => {
        setIsModalOpen(false);
        if (newCourse) {
            setCourses([...courses, newCourse]);
        }
    };

    return (
        <div id="wd-dashboard" className="p-6">
            <h1 id="wd-dashboard-title" className="text-4xl font-bold mb-4">
                Dashboard
            </h1>
            <hr className="mb-6" />

            <div className="flex w-full justify-between">
                <span className="text-xl font-bold">New Course</span>
                <button onClick={openModal} className="btn btn-primary min-w-24">Add</button>
            </div>

            <h2 id="wd-dashboard-published" className="text-2xl font-semibold mb-4">
                Published Courses ({courses.length})
            </h2>
            <hr className="mb-6" />

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
                                    className="w-full h-44 object-center"
                                />
                            </figure>
                            <div className="card-body pt-4 h-36">
                                <h2 className="card-title">{course.id}</h2>
                                <p>{course.name}</p>
                                <p className="text-sm opacity-70">
                                    {course.courseCode} {course.semester}
                                </p>
                            </div>

                            <div className='flex justify-between pl-4 pr-4'>
                                <button className="btn btn-primary">Go</button>
                                <div className="join join-horizontal">
                                    <button className="btn btn-secondary join-item" onClick={openModal}>Edit</button>
                                    <button className="btn btn-accent join-item">Delete</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <NewCourseModal
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    );
}
