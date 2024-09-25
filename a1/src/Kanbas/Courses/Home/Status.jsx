export default function CourseStatus() {
    return (
        <div id="wd-course-status" className="artboard artboard-demo p-6 max-w-xs bg-base-200 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Course Status</h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <button className="btn btn-warning w-full">Unpublish</button>
                <button className="btn btn-success w-full">Publish</button>
            </div>

            <div className="space-y-2">
                <button className="btn btn-primary btn-outline w-full">Import Existing Content</button>
                <button className="btn btn-primary btn-outline w-full">Import from Commons</button>
                <button className="btn btn-sm btn-secondary btn-outline w-full">Choose Home Page</button>
                <button className="btn btn-sm btn-secondary btn-outline w-full">View Course Stream</button>
                <button className="btn btn-sm btn-secondary btn-outline w-full">New Announcement</button>
                <button className="btn btn-sm btn-secondary btn-outline w-full">New Analytics</button>
                <button className="btn btn-secondary btn-outline w-full">View Course Notifications</button>
            </div>
        </div>
    );
}
