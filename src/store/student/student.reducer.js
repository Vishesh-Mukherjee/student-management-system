import { STUDENT_ACTION_TYPES } from "./student.types";

const INITIAL_STATE = {
    studentList: [],
}

export const studentReducer = (state=INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type) {
        case STUDENT_ACTION_TYPES.SET_STUDENT_LIST:
            return {...state, studentList:payload};
        default:
            return state;
    }
}