import { useState } from "react"
import FormInput from "../templates/FormInput";
import FormSubmitButton from "../templates/FormSubmitButton";
import { Form, Link } from "react-router-dom";
import axiosClient from "../axios-client";

function Login() {
    const [ FormData, SetFormData ] = useState({
        email : "",
        password : "",
    });
    const [ error, setError ] = useState({});

    const validate = (data) => {
        const error = {};

        if(!data.email){
            error.email = "Email is required."
        }

        if(!data.password){
            error.password = "Password is required."
        }

        return error;
    };


    const HandleSubmit = async (event) => {
        event.preventDefault();
        const validated = validate(FormData)
        if(Object.keys(validated).length > 0){
            setError(validated);
            return;
        }

        // Send form inputs to laravel route
        try{
            const { data } = axiosClient.post('auth/login', FormData);
            console.log(data);
        } catch(error){
            console.log(error);
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
                    error={error.email}
                />
                <FormInput
                    type="password"
                    value={FormData.password}
                    placeholder="Password"
                    onChange={(e) => SetFormData((current) => ({...current, password : e.target.value}) )}
                    required
                    error={error.password}
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
