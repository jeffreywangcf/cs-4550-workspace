import GreenCheckmark from "./GreenCheckmark";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineStop } from "react-icons/ai";
export default function ModuleControls() {
  return (
    <div className="flex justify-end mb-8 mr-8 space-x-4">
      <div className="join">
        <button id="wd-collapse-all" className="btn join-item">
          Collapse All
        </button>
        <button id="wd-view-progress" className="btn join-item">
          View Progress
        </button>
        <div className="dropdown rounded-none min-w-40">
          <label
            tabIndex={0}
            className="btn font-semibold bg-base-200 join-item"
          >
            {" "}
            <GreenCheckmark /> Publish All <MdExpandMore />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-80 z-50"
          >
            <li>
              <a id="wd-publish-all-modules-and-items-btn">
                <GreenCheckmark /> Publish all modules and items
              </a>
            </li>
            <li>
              <a id="wd-publish-modules-only-button">
                <GreenCheckmark /> Public modules only
              </a>
            </li>
            <li>
              <a id="wd-unpublish-all-modules-and-items">
                <AiOutlineStop className="text-2xl" /> Unpublish all modules and
                items
              </a>
            </li>
            <li>
              <a id="wd-unpublish-modules-only">
                <AiOutlineStop className="text-2xl" /> Unpublish modules only
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary join-item">+ Module</button>
      </div>
    </div>
  );
}
