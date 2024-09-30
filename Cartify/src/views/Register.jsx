import { useState, useContext } from "react"
import FormInput from "../templates/FormInput";
import FormSubmitButton from "../templates/FormSubmitButton";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";

function Register() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [ error, setError ] = useState({});
    const [ FormData, setFormData ] = useState({
        first_name : "",
        last_name : "",
        username : "",
        email : "",
        password : "",
        confirm_password : "",
        seller : false
    });

    // FORM VALIDATION LOGIC
    const validateForm = (inputs) => {
        const errors = {};

        !inputs.first_name.trim() && (errors.first_name = "First name is required");
        !inputs.last_name.trim() && (errors.last_name = "Last name is required");
        !inputs.username.trim() && (errors.username = "Username is required");

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!inputs.email) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(inputs.email)) {
            errors.email = "Email is not valid";
        }

        // Password validation
        if (!inputs.password) {
            errors.password = "Password is required";
        } else if (inputs.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        // Confirm Password validation
        if (!inputs.confirm_password) {
            errors.confirm_password = "Please confirm your password";
        } else if (inputs.password !== inputs.confirm_password) {
            errors.confirm_password = "Passwords do not match";
        }

        return errors;
    };

    // FORM SUBMISSION
    const RegisterUser = async (e) => {
        e.preventDefault();

        // Perform Front-end Validation
        const errors = validateForm(FormData);
        if(Object.keys(errors).length !== 0){
            setError(errors);
            return;
        }

        // API REQUEST
        try {
            const { data } = await axiosClient.post('register', FormData);
            login(data);
            navigate('/');
        } catch (err) {
            setError(err.response.data.errors)
        }
    };

    return (
        <>
            <form onSubmit={RegisterUser} method="POST">
                <div className="flex flex-col gap-4">
                    <FormInput
                        type="text"
                        value={FormData.first_name}
                        placeholder="First Name"
                        required
                        onChange={(e) => setFormData((current) => ({...current, first_name : e.target.value}))}
                        error={error.first_name}
                    />
                    <FormInput
                        type="text"
                        value={FormData.last_name}
                        placeholder="Last Name"
                        required
                        onChange={(e) => setFormData((current) => ({...current, last_name : e.target.value}))}
                        error={error.last_name}
                    />
                    <FormInput
                        type="text"
                        value={FormData.username}
                        placeholder="Username"
                        required
                        onChange={(e) => setFormData((current) => ({...current, username : e.target.value}))}
                        error={error.username}
                    />
                    <FormInput
                        type="email"
                        value={FormData.email}
                        placeholder="Email"
                        required
                        onChange={(e) => setFormData((current) => ({...current, email : e.target.value}))}
                        error={error.email}
                    />
                    <FormInput
                        type="password"
                        value={FormData.password}
                        placeholder="Password"
                        required
                        onChange={(e) => setFormData((current) => ({...current, password : e.target.value}))}
                        error={error.password}
                    />
                    <FormInput
                        type="password"
                        value={FormData.confirm_password}
                        placeholder="Confirm Password"
                        required
                        onChange={(e) => setFormData((current) => ({...current, confirm_password : e.target.value}))}
                        error={error.confirm_password}
                    />

                    <div className="flex justify-start gap-3 items-center">
                        Seller Account
                        <input type="checkbox" onChange={(e) => setFormData((current) => ({...current, seller: e.target.checked}))} checked={FormData.seller}/>
                    </div>


                    <FormSubmitButton
                        type="submit"
                        label="Register"
                        color="blue"
                        size="lg"
                    />
                </div>
            </form>
        </>
    )
}

export default Register;
