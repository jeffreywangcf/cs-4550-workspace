import React, { useState, useEffect } from "react";
import {CourseProps} from "./shared/props/CourseProps";

interface NewCourseModalProps {
    isOpen: boolean;
    onClose: (course: CourseProps | null) => void;
    initialData?: CourseProps | null;
}

const NewCourseModal = ({ isOpen, onClose, initialData }: NewCourseModalProps) => {
    const [nc_id, setNcId] = useState('');
    const [nc_name, setNcName] = useState('');
    const [nc_courseCode, setNcCourseCode] = useState('');
    const [nc_semester, setNcSemester] = useState('');
    const [nc_image, setNcImage] = useState('');
    const [nc_description, setNcDescription] = useState('');

    useEffect(() => {
        setNcId(initialData ? initialData.id : '');
        setNcName(initialData ? initialData.name : '');
        setNcCourseCode(initialData ? initialData.courseCode : '');
        setNcSemester(initialData ? initialData.semester : '');
        setNcImage(initialData ? initialData.image : '/images/courses/TRS201-cover.png');
        setNcDescription(initialData ? initialData.description : '');
    }, [initialData]);

    const handleSave = () => {
        const newCourse: CourseProps = {
            id: nc_id,
            name: nc_name,
            courseCode: nc_courseCode,
            semester: nc_semester,
            image: nc_image,
            description: nc_description,
            link: `/Kanbas/Courses/${nc_id}/Home`,
            modules: []
        };
        onClose(newCourse);
    };

    if (!isOpen) return null;

    return (
        <div className="modal modal-bottom sm:modal-middle modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-2xl">{initialData ? "Edit Course" : "New Course"}</h3>
                <div className="space-y-2 mt-4">
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Course ID"
                        value={nc_id}
                        onChange={(e) => setNcId(e.target.value)}
                    />
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Course Title"
                        value={nc_name}
                        onChange={(e) => setNcName(e.target.value)}
                    />
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Course Code"
                        value={nc_courseCode}
                        onChange={(e) => setNcCourseCode(e.target.value)}
                    />
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Semester"
                        value={nc_semester}
                        onChange={(e) => setNcSemester(e.target.value)}
                    />
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Image URL"
                        value={nc_image}
                        onChange={(e) => setNcImage(e.target.value)}
                    />
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Description"
                        value={nc_description}
                        onChange={(e) => setNcDescription(e.target.value)}
                    />
                </div>

                <div className="modal-action">
                    <button className="btn" onClick={() => onClose(null)}>Discard</button>
                    <button className="btn btn-primary" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default NewCourseModal;
