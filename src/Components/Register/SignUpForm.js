
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
function SignUpForm(props) {
    const formValues = {
        name: '',
        email: '',
        id: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        select: '',
    }
    const [inputValues, setInputValues] = useState(formValues);
    const [errors, setErrors] = useState({});
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });


    }
    const submitHandler = (e) => {
        e.preventDefault();
        setErrors(validate(inputValues));
        console.log(inputValues);
    }
    const validate = (values) => {
        let errors = {};
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "email is required";
        }
        else if (!regex.test(values.email)) {
            errors.email = "email is not valid";
        }

        if (values.name === "") {
            errors.name = "name is required"
        }
        if (!values.password) {
            errors.password = "password is required"
        }
        else if (!values.confirmPassword) {
            errors.confirmPassword = "Re write your password again ";
        }

        else if (values.password != values.confirmPassword) {
            errors.password = "password does not match"
        }

        else if (values.password.length < 4) {
            errors.password = "password length is too small ..must be greater than 4 characters"
        }
        if (!values.id) {
            errors.id = "user Id is required";
        }
        if (!values.mobile) {
            errors.mobile = "mobile number is required";
        }
        if (!values.select) {
            errors.select = "role is required";
        }
        return errors;



    }
    return (
        <div>
            <Form className="login-form" onSubmit={submitHandler} >
                <Form.Group className="mb-3" controlId="formBasicFullname">
                    <Form.Control name="name" value={inputValues.name} type="text" onChange={onChangeHandler} placeholder="Enter your full name" />
                </Form.Group>
                <p>{errors.name}</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="email" value={inputValues.email} type="email" onChange={onChangeHandler} placeholder="Enter email" />
                </Form.Group>
                <p>{errors.email}</p>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Control name="id" type="text" value={inputValues.id} onChange={onChangeHandler} placeholder="Your Id" />
                </Form.Group>
                <p>{errors.id}</p>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control name="mobile" values={inputValues.mobile} type="text" onChange={onChangeHandler} placeholder="Your Mobile Number" />
                </Form.Group>
                <p>{errors.mobile}</p>
                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Control name="password" values={inputValues.password} type="password" onChange={onChangeHandler} placeholder="password" autoComplete="on" />
                </Form.Group>
                <p>{errors.password}</p>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword" >
                    <Form.Control name="confirmPassword" values={inputValues.confirmPassword} type="password" onChange={onChangeHandler} placeholder="confirm you password" autoComplete="on" />
                </Form.Group>

                <p>{errors.confirmPassword}</p>

                <Form.Select value={inputValues.role} onChange={onChangeHandler} name="select">
                    <option value="">select your role</option>
                    <option value="Hub">Hub</option>
                    <option value="Admin">Admin</option>
                </Form.Select>
                <Button variant="primary" type="submit">
                    Submit
                </Button>


            </Form>
            <p className='text-center mt-4'>Already Have an Account? <Link to="/login">Sign in</Link>  </p>
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        user: state

    }
}

// const mapDispatchToProps = (dispatch) => {
//     register: (useState) => {

//     }
// }


export default connect(mapStateToProps)(SignUpForm)