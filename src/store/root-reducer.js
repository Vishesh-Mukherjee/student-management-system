import { combineReducers } from "redux";
import { studentReducer } from "./student/student.reducer";

export const rootReducer = combineReducers({
    student: studentReducer,
})