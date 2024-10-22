import {Link, useParams} from "react-router-dom";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
    const onlineEntryOptions = ["text-entry", "website-url", "media-recording", "student-annotation", "file-upload"]
    const { cid, aid } = useParams();
    const ca = assignments[cid];
    const assignment = ca ? ca.find((a) => a.id === aid) : null;

    if (!assignment) {
        return <div className="alert-error m-4">No such assignment.</div>;
    }
    return (
        <form id="wd-assignments-editor" className="p-8 max-w-2xl space-y-8">
            <div>
                <label htmlFor="wd-name" className="block font-bold mb-1 text-xl">Assignment Name</label>
                <input
                    id="wd-name"
                    value={assignment.name}
                    className="input input-bordered w-full mb-4 p-2 border border-base-300 rounded"
                />
            </div>


            <div>
                <label htmlFor="wd-description" className="block font-bold mb-1 text-xl">Description</label>
                <textarea
                    id="wd-description"
                    className="textarea textarea-bordered w-full h-32 mb-4 p-2 border border-base-300 rounded"
                >
                {assignment.description}
            </textarea>
            </div>


            <div>
                <label htmlFor="wd-points" className="block font-bold mb-1 text-xl">Points</label>
                <input
                    type="number"
                    id="wd-points"
                    value={assignment.points}
                    className="input input-bordered p-2 border border-base-300 rounded w-full"
                />
            </div>


            <div>
                <label htmlFor="wd-group" className="block font-bold mb-1 text-xl">Assignment Group</label>
                <select
                    id="wd-group"
                    value={assignment.group}
                    className="select select-bordered w-full p-2 border border-base-300 rounded"
                >
                    <option value="assignment">Assignment</option>
                    <option value="exam">Exam</option>
                    <option value="quiz">Quiz</option>
                </select>
            </div>


            <div>
                <label htmlFor="wd-display-grade-as" className="block font-bold mb-1 text-xl">Display Grade As</label>
                <select
                    id="wd-display-grade-as"
                    value={assignment.displayGradeAs}
                    className="select select-bordered w-full p-2 border border-base-300 rounded"
                >
                    <option value="percentage">Percentage</option>
                    <option value="letter">Letter</option>
                </select>
            </div>


            <div>
                <label htmlFor="wd-submission-type" className="block font-bold mb-1 text-xl">Submission Type</label>
                <select
                    id="wd-submission-type"
                    value={assignment.submissionType.type}
                    className="select select-bordered w-full p-2 border border-base-300 rounded"
                >
                    <option value="online">Online</option>
                </select>
                <label className="block font-bold mb-1 mt-1">Online Entry Options</label>
                <div className="flex flex-col space-y-2">
                    {onlineEntryOptions.map((option) => (
                        <label key={option} className="inline-flex items-center">
                            <input
                                type="checkbox"
                                value={option}
                                className="checkbox"
                                checked={assignment.submissionType.onlineEntryOptions.includes(option)}
                            />
                            <span className="ml-2 capitalize">{option.replace("-", " ")}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label htmlFor="wd-submission-type" className="block font-bold mb-1 text-xl">Assign</label>

                <div className="mb-4">
                    <label htmlFor="wd-assign-to" className="block font-bold mb-1">Assign To</label>
                    <input
                        type="text"
                        id="wd-assign-to"
                        className="input input-bordered p-2 border border-base-300 rounded w-full"
                    />
                </div>


                <div className="mb-4">
                    <label htmlFor="wd-due-date" className="block font-bold mb-1">Due</label>
                    <input
                        type="datetime-local"
                        id="wd-due-date"
                        value={new Date(assignment.dueDate).toISOString().slice(0, 16)}
                        className="input input-bordered p-2 border border-base-300 rounded w-full"
                    />
                </div>


                <div className="flex space-x-4 mb-4">

                    <div className="w-1/2">
                        <label htmlFor="wd-available-from" className="block font-bold mb-1">Available From</label>
                        <input
                            type="datetime-local"
                            id="wd-available-from"
                            value={new Date(assignment.availableFrom).toISOString().slice(0, 16)}
                            className="input input-bordered p-2 border border-base-300 rounded w-full"
                        />
                    </div>

                    <div className="w-1/2">
                        <label htmlFor="wd-available-until" className="block font-bold mb-1">Until</label>
                        <input
                            type="datetime-local"
                            id="wd-available-until"
                            value={new Date(assignment.availableUntil).toISOString().slice(0, 16)}
                            className="input input-bordered p-2 border border-base-300 rounded w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-4">
                <div className="join">
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn join-item">
                        Cancel
                    </Link>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-primary join-item">
                        Save
                    </Link>
                </div>
            </div>
        </form>
    );
}
