import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButtons() {
  return (
    <div className="flex items-center justify-end space-x-2">
      <GreenCheckmark />
      <IoEllipsisVertical className="text-2xl" />
    </div>
  );
}
