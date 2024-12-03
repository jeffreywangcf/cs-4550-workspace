import {ModuleProps} from "./ModuleProps";

export interface CourseProps {
    id: string;
    name: string;
    courseCode: string;
    semester: string;
    image: string;
    description: string;
    link: string;
    modules: ModuleProps[];
}