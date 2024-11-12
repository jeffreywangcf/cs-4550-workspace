import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CourseProp} from "../Dashboard";
import * as db from '../Database';

interface CourseState {
    courses: CourseProp[];
}

const initialState: CourseState = {
    courses: db.courses
}

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state, action: PayloadAction<CourseProp>) => {
            state.courses.push(action.payload);
        },
        editCourse: (state, action: PayloadAction<CourseProp>) => {
            const index = state.courses.findIndex(course => course.id === action.payload.id);
            if (index >= 0) {
                state.courses[index] = action.payload;
            }
        },
        deleteCourse: (state, action: PayloadAction<string>) => {
            state.courses = state.courses.filter(course => course.id !== action.payload);
        }
    }
})

export const {addCourse, editCourse, deleteCourse} = coursesSlice.actions;
export default coursesSlice.reducer;