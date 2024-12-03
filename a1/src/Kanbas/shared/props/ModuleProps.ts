import {LessonProps} from "./LessonProps";

export interface ModuleProps{
    _id: string;
    name: string;
    description: string;
    lessons: LessonProps[];
    course: string
}