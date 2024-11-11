import React, { useState } from "react";
import type { CourseProp } from './Dashboard';

interface NewCourseModalProps {
    isOpen: boolean;
    onClose: (course: CourseProp | null) => void;
}

const NewCourseModal = ({ isOpen, onClose }: NewCourseModalProps) => {
    const [nc_id, setNcId] = useState("TMP001");
    const [nc_name, setNcName] = useState("New Course Title");
    const [nc_courseCode, setNcCourseCode] = useState("TEMP001.001");
    const [nc_semester, setNcSemester] = useState("Fall 2024");
    const [nc_image, setNcImage] = useState("/images/courses/TRS201-cover.png");
    const [nc_description, setNcDescription] = useState("Course Description");

    const handleSave = () => {
        const newCourse: CourseProp = {
            id: nc_id,
            name: nc_name,
            courseCode: nc_courseCode,
            semester: nc_semester,
            image: nc_image,
            description: nc_description,
            link: `/Kanbas/Courses/${nc_id}/Home`
        };
        onClose(newCourse);
    };

    if (!isOpen) return null;

    return (
        <div className="modal modal-bottom sm:modal-middle modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit New Course</h3>
                <input
                    type="text"
                    className="input input-bordered w-full mb-2"
                    placeholder="Course ID"
                    value={nc_id}
                    onChange={(e) => setNcId(e.target.value)}
                />
                <input
                    type="text"
                    className="input input-bordered w-full mb-2"
                    placeholder="Course Title"
                    value={nc_name}
                    onChange={(e) => setNcName(e.target.value)}
                />
                <input
                    type="text"
                    className="input input-bordered w-full mb-2"
                    placeholder="Course Code"
                    value={nc_courseCode}
                    onChange={(e) => setNcCourseCode(e.target.value)}
                />
                <input
                    type="text"
                    className="input input-bordered w-full mb-2"
                    placeholder="Semester"
                    value={nc_semester}
                    onChange={(e) => setNcSemester(e.target.value)}
                />
                <input
                    type="text"
                    className="input input-bordered w-full mb-2"
                    placeholder="Image URL"
                    value={nc_image}
                    onChange={(e) => setNcImage(e.target.value)}
                />
                <input
                    type="text"
                    className="input input-bordered w-full mb-2"
                    placeholder="Description"
                    value={nc_description}
                    onChange={(e) => setNcDescription(e.target.value)}
                />
                <div className="modal-action">
                    <button className="btn" onClick={() => onClose(null)}>Discard</button>
                    <button className="btn btn-primary" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default NewCourseModal;
