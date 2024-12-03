import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from '../Database';
import { CourseProps } from "../shared/props/CourseProps";
import { ModuleProps } from "../shared/props/ModuleProps";

interface CourseState {
    courses: CourseProps[];
}

const initialState: CourseState = {
    courses: db.courses
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state, action: PayloadAction<CourseProps>) => {
            state.courses.push(action.payload);
        },
        editCourse: (state, action: PayloadAction<CourseProps>) => {
            const index = state.courses.findIndex(course => course.id === action.payload.id);
            if (index >= 0) {
                state.courses[index] = action.payload;
            }
        },
        deleteCourse: (state, action: PayloadAction<string>) => {
            state.courses = state.courses.filter(course => course.id !== action.payload);
        },

        addModule: (state, action: PayloadAction<{ courseId: string; module: ModuleProps }>) => {
            const course = state.courses.find(course => course.id === action.payload.courseId);
            if (course) {
                course.modules.push(action.payload.module);
            }
        },
        editModule: (state, action: PayloadAction<{ courseId: string; module: ModuleProps }>) => {
            const course = state.courses.find(course => course.id === action.payload.courseId);
            if (course) {
                const index = course.modules.findIndex(mod => mod._id === action.payload.module._id);
                if (index >= 0) {
                    course.modules[index] = action.payload.module;
                }
            }
        },

        deleteModule: (state, action: PayloadAction<{ courseId: string; moduleId: string }>) => {
            const course = state.courses.find(course => course.id === action.payload.courseId);
            if (course) {
                course.modules = course.modules.filter(module => module._id !== action.payload.moduleId);
            }
        },

    }
});

export const { addCourse, editCourse, deleteCourse, addModule, editModule, deleteModule } = coursesSlice.actions;
export default coursesSlice.reducer;
