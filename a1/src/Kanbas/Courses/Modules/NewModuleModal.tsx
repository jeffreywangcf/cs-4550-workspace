import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {ModuleProps} from "../../shared/props/ModuleProps";
import {addModule, editModule} from "../../store/reducer";

interface NewModuleModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseId: string;
    initialData?: ModuleProps | null;
}

const NewModuleModal = ({ isOpen, onClose, courseId, initialData }: NewModuleModalProps) => {
    const dispatch = useDispatch();

    const [moduleId, setModuleId] = useState('');
    const [moduleName, setModuleName] = useState('');
    const [moduleDescription, setModuleDescription] = useState('');

    useEffect(() => {
        setModuleId(initialData ? initialData._id : '');
        setModuleName(initialData ? initialData.name : '');
        setModuleDescription(initialData ? initialData.description : '');
    }, [initialData]);

    const handleSave = () => {
        const newModule: ModuleProps = {
            _id: moduleId,
            name: moduleName,
            description: moduleDescription,
            course: courseId,
            lessons: initialData ? initialData.lessons : [],
        };

        if (initialData) {
            dispatch(editModule({ courseId, module: newModule }));
        } else {
            dispatch(addModule({ courseId, module: newModule }));
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal modal-bottom sm:modal-middle modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-2xl">{initialData ? "Edit Module" : "New Module"}</h3>
                <div className="space-y-2 mt-4">
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Module ID"
                        value={moduleId}
                        onChange={(e) => setModuleId(e.target.value)}
                    />
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Module Name"
                        value={moduleName}
                        onChange={(e) => setModuleName(e.target.value)}
                    />
                    <textarea
                        className="textarea textarea-bordered w-full"
                        placeholder="Module Description"
                        value={moduleDescription}
                        onChange={(e) => setModuleDescription(e.target.value)}
                    />
                </div>

                <div className="modal-action">
                    <button className="btn" onClick={onClose}>Discard</button>
                    <button className="btn btn-primary" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default NewModuleModal;
