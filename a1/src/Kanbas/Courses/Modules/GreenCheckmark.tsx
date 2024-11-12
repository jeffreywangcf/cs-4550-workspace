import { FaCheckCircle, FaCircle } from "react-icons/fa";
export default function GreenCheckmark() {
  return (
    <span className="relative inline-block">
      <FaCircle className="text-white text-2xl" />
      <FaCheckCircle className="text-success absolute top-0 left-0 text-2xl" />
    </span>
  );
}
