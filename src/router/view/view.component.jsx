import { Fragment } from "react";
import { useSelector } from "react-redux";
import ViewCard from "../../components/view-card/view-card.component";
import { selectStudentList } from "../../store/student/student.selector";
import Navigation from "../navigation/navigation.component";
import { Container } from "./view.styles"

const View = () => {
    const studentList = useSelector(selectStudentList);
    return (
        <Fragment>
            <Navigation />
            <Container>
                {studentList.map((student, index) => <ViewCard key={index} id={index} student={student} />)}
            </Container>
        </Fragment>
    )
}


export default View;