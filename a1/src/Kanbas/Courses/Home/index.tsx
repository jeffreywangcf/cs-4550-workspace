import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div id="wd-home" className="flex">
      <div className="w-3/4">
        <Modules />
      </div>
      <div className="w-1/4 pl-6">
        <CourseStatus />
      </div>
    </div>
  );
}
