import { GoSearch } from "react-icons/go";

export default function AssignmentControls() {
    return (
        <div className="flex items-center w-full">
            <div className="relative flex-grow min-w-0">
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered pl-10 w-full"
                />
                <GoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>
            <div className="join ml-4">
                <button className="btn btn-secondary join-item">
                    + Group
                </button>
                <button className="btn btn-primary join-item">
                    + Assignment
                </button>
            </div>
        </div>
    );
}
