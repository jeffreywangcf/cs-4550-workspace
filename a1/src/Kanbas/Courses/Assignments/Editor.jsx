export default function AssignmentEditor() {
    return (
        <form id="wd-assignments-editor" className="p-8 max-w-2xl space-y-8">
            <div>
                <label htmlFor="wd-name" className="block font-bold mb-1 text-xl">Assignment Name</label>
                <input
                    id="wd-name"
                    value="A1 - ENV + HTML"
                    className="input input-bordered w-full mb-4 p-2 border border-base-300 rounded"
                />
            </div>


            <div>
                <label htmlFor="wd-description" className="block font-bold mb-1 text-xl">Description</label>
                <textarea
                    id="wd-description"
                    className="textarea textarea-bordered w-full h-32 mb-4 p-2 border border-base-300 rounded"
                >
        The assignment is available online. Submit a link to the landing page of...
            </textarea>
            </div>


            <div>
                <label htmlFor="wd-points" className="block font-bold mb-1 text-xl">Points</label>
                <input
                    type="number"
                    id="wd-points"
                    value={100}
                    className="input input-bordered p-2 border border-base-300 rounded w-full"
                />
            </div>


            <div>
                <label htmlFor="wd-group" className="block font-bold mb-1 text-xl">Assignment Group</label>
                <select
                    id="wd-group"
                    defaultValue="assignment"
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
                    defaultValue="percentage"
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
                    defaultValue="online"
                    className="select select-bordered w-full p-2 border border-base-300 rounded"
                >
                    <option value="online">Online</option>
                </select>
                <label className="block font-bold mb-1 mt-1">Online Entry Options</label>
                <div className="flex flex-col space-y-2">
                    <label className="inline-flex items-center">
                        <input type="checkbox" id="wd-text-entry" value="text-entry" className="checkbox"/>
                        <span className="ml-2">Text Entry</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="checkbox" id="wd-text-entry" value="website-url" className="checkbox"/>
                        <span className="ml-2">Website URL</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="checkbox" id="wd-text-entry" value="media-recording" className="checkbox"/>
                        <span className="ml-2">Media Recording</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="checkbox" id="wd-text-entry" value="student-annotation" className="checkbox"/>
                        <span className="ml-2">Student Annotation</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="checkbox" id="wd-text-entry" value="file-upload" className="checkbox"/>
                        <span className="ml-2">File Upload</span>
                    </label>
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
                        className="input input-bordered p-2 border border-base-300 rounded w-full"
                    />
                </div>


                <div className="flex space-x-4 mb-4">

                    <div className="w-1/2">
                        <label htmlFor="wd-available-from" className="block font-bold mb-1">Available From</label>
                        <input
                            type="datetime-local"
                            id="wd-available-from"
                            className="input input-bordered p-2 border border-base-300 rounded w-full"
                        />
                    </div>

                    <div className="w-1/2">
                        <label htmlFor="wd-available-until" className="block font-bold mb-1">Until</label>
                        <input
                            type="datetime-local"
                            id="wd-available-until"
                            className="input input-bordered p-2 border border-base-300 rounded w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-4">
                <div className="join">
                    <button className="btn join-item">
                        Cancel
                    </button>
                    <button className="btn btn-primary join-item">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}
