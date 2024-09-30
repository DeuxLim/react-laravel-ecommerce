import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../templates/FormInput";
import FormSubmitButton from "../templates/FormSubmitButton";
import axiosClient from "../axios-client";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [ errors, setErrors ] = useState({});
    const [ FormData, SetFormData ] = useState({
        email : "",
        password : "",
    });

    // FORM VALIDATION LOGIC
    const validate = (data) => {
        const error = {};
        if(!data.email){ error.email = "Email is required." }
        if(!data.password){ error.password = "Password is required." }
        return error;
    };

    // FORM SUBMISSION
    const HandleSubmit = async (event) => {
        event.preventDefault();
        const validated = validate(FormData)
        if(Object.keys(validated).length > 0){
            setErrors(validated);
            return;
        }

        // Send form inputs to laravel route
        try{
            const { data } = await axiosClient.post('login', FormData);
            login(data);
            navigate('/');
        } catch(error){
            if(error.response.data.errors){
                setErrors(error.response.data.errors);
            }
        }
    };

  return (
    <>
        <form onSubmit={HandleSubmit} method="POST">
            <div className="flex flex-col gap-4">
                <FormInput
                    type="email"
                    value={FormData.email}
                    placeholder="Email Address or Phone Number"
                    onChange={(e) => SetFormData((current) => ({...current, email : e.target.value}) )}
                    required
                    error={errors?.email}
                />
                <FormInput
                    type="password"
                    value={FormData.password}
                    placeholder="Password"
                    onChange={(e) => SetFormData((current) => ({...current, password : e.target.value}) )}
                    required
                    error={errors?.password}
                />

                <FormInput
                    error={ Object.keys(errors).length === 1 && errors }
                />

                <FormSubmitButton
                    type="submit"
                    label="Log In"
                    color="blue"
                    size="lg"
                />
            </div>
        </form>

        <div className="text-center">
            <Link to="/" className="text-blue-500 hover:underline">Forgotten Password?</Link>
        </div>

        <div className="border"></div>

        <FormSubmitButton
            linkTo="/auth/register"
            type="button"
            label="Create New Account"
            color="green"
            size="md"
        />
    </>
  )
}

export default Login
