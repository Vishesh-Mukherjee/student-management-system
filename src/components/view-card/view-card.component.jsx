import { useDispatch, useSelector } from "react-redux";
import { setStudentList } from "../../store/student/student.action";
import { selectStudentList } from "../../store/student/student.selector";
import { Container, Name, NameContainer, Email, ButtonContainer, Button, LinkButton } from "./view-card.styles";

const ViewCard = ({ id, student }) => {
    const { firstName, lastName, email } = student;
    const dispatch = useDispatch();
    const studentList = useSelector(selectStudentList);

    const deleteStudent = () => {
        const udpatedStudentList = studentList.filter((student, index) => index !== id);
        dispatch(setStudentList(udpatedStudentList));
    }

    return (
        <Container>
            <NameContainer>
                <Name>{firstName}</Name>
                <Name>{lastName}</Name>
            </NameContainer>
            <Email>{email}</Email>
            <ButtonContainer>
                <LinkButton to={"/edit/"+id}>EDIT</LinkButton>
                <Button onClick={deleteStudent}>DELETE</Button>
            </ButtonContainer>
        </Container>
    );
};

export default ViewCard;