import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/input.component";
import { setStudentList } from "../../store/student/student.action";
import { selectStudentList } from "../../store/student/student.selector";
import Navigation from "../navigation/navigation.component";
import { Button, Container, Form, ButtonContainer } from "./add.styles"

const defaultFields = {
    firstName: "",
    lastName: "",
    email: "",
}

const Add = () => {
    const [formFields, setFormFields] = useState(defaultFields);
    const {firstName, lastName, email} = formFields;
    const studentList = useSelector(selectStudentList);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(setStudentList([...studentList, formFields])); 
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
                        type:"email",
                        require:true,
                        name: "email",
                        value: email,
                        onChange: onChangeHandler,
                    }} />
                    <ButtonContainer>
                        <Button type="submit">ADD</Button>
                    </ButtonContainer>
               </Form>
            </Container>
        </Fragment>
    )
}

export default Add;