import { createAction } from "../../utils/reducer/reducer.utils"
import { STUDENT_ACTION_TYPES } from "./student.types"

export const setStudentList = (studentList) => {
    return createAction(STUDENT_ACTION_TYPES.SET_STUDENT_LIST, studentList); 
}