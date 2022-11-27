import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/input/input.component";
import { setStudentList } from "../../store/student/student.action";
import { selectStudentList } from "../../store/student/student.selector";
import Navigation from "../navigation/navigation.component";
import { Button, ButtonContainer, Container, Form } from "./edit.styles"

const Edit = () => {
    const dispatch = useDispatch();
    const studentList = useSelector(selectStudentList);
    const navigate = useNavigate();
    const params = useParams();
    const index = params.id;

    const currStudent = studentList[index];
    const [student, setStudent] = useState(currStudent);

    const {firstName, lastName, email} = student;

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setStudent({...student, [name]:value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        studentList[index].firstName = student.firstName;
        studentList[index].lastName = student.lastName;
        studentList[index].email = student.email;
        dispatch(setStudentList(studentList));
        navigate("/view");
    }

    return (
        <Fragment>
            <Navigation />
            <Container>
            <Form onSubmit={onSubmitHandler}>
                    <Input title="FIRST NAME" otherProps={{
                        type:"text",
                        require:true,
                        name: "firstName",
                        value: firstName,
                        onChange: onChangeHandler,
                    }} />
                    <Input title="LAST NAME" otherProps={{
                        type:"text",
                        require:true,
                        name: "lastName",
                        value: lastName,
                        onChange: onChangeHandler,
                    }} />
                    <Input title="EMAIL" otherProps={{
                        type:"text",
                        require:true,
                        name: "email",
                        value: email,
                        onChange: onChangeHandler,
                    }} />
                    <ButtonContainer>
                        <Button type="submit">Edit</Button>
                    </ButtonContainer>
               </Form>
            </Container>
        </Fragment>
    )
}

export default Edit;