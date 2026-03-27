import React from 'react';
import { useState } from 'react';
import FormDataType from '../types/FormDataType';
import axios from "axios";
import url from '../constants/url';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import toastwork from '../constants/toast';
import LoginDataType from '../types/LoginDataType';



const Login = () => {

    const [loginData, setLoginData] = useState<LoginDataType>({
        email: "",
        password: ""
    })

    const navigate = useNavigate();
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    const isValid = () => {
        if (loginData.email == "") {
            toastwork("error", "Email is missing");
            return false;
        }
        if (loginData.password == "") {
            toastwork("error", "Password is missing");
            return false;
        }
        if (emailError != "") {
            toastwork("error", "Email is not correct");
            return false;
        }
        if (passwordError != "") {
            toastwork("error", "Password is not correct");
            return false;
        }
        return true;
    }

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            if (!isValid()) {
                //do not allow the control to execute this
            }
            else {
                console.log(loginData);
                const response = await axios.post(`${url}/auth/signup`, loginData);
                console.log(response);
                if (response.status == 201) {
                    toastwork("success", "SignUp Successfull");
                    setTimeout(() => navigate("/login"), 2000);
                }
                setLoginData({
                    email: "",
                    password: "",
                });
                // const response = await axios.post(`${url}/signup`, formData);


            }

        }
        catch (error) {
            toastwork("success", "SignUp Unsuccessfull");
        }
    }

     const isEmailValid = (email:string) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const name = event.target.name;
            const value = event.target.value;
            if(name=="email"){
                if(value=="") setEmailError("Email is Required");
                if(!isEmailValid(value)) setEmailError("Invalid Email Format");
                if(isEmailValid(value)) setEmailError("");
            }
            if(name=="password"){
                 if(value=="") setPasswordError("Password is Required");
                 if(value.length<10) setPasswordError("The length of the password should be minimum 10");
                 if(value.length>=10) setPasswordError("");
    
            }
            setLoginData(values => ({
                ...values,
                [name]: value,
                // role: ["buyer"]
            }));
        }

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='w-full m-2 h-2/3 md:w-2/3 lg:w-2/5 border border-pink-400 border-2 rounded-2xl'>
                <div className='lg:p-5'>
                    <form onSubmit={handleOnSubmit}>
                        <div className='m-10 lg:m-10'>
                            <div className='text-center font-bold'>
                                <div className='text-3xl text-blue-500'>
                                    BuyMySketch
                                </div>
                                <div className='mt-8 mb-10 text-xl'>
                                    Enter your login credentials
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex flex-col gap-8'>
                                    <div>
                                        <h1 className='font-bold text-xl mb-2'>Email<span className='text-red-500'>*</span></h1>
                                        <input className={`border  rounded-2xl w-full p-3 focus:outline-none focus:border-amber-500 ${emailError ? "focus:outline-none focus:border-red-500 border-red-500" : "black"}`} name="email" value={loginData?.email} onChange={handleChange} placeholder='Enter your Email' />
                                        {emailError && <p className='text-red-500'>{emailError}</p>}
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-xl mb-2'>Password<span className='text-red-500'>*</span></h1>
                                        <input className={`border  rounded-2xl w-full p-3 focus:outline-none focus:border-amber-500 ${passwordError ? "border-red-500 focus:border-red-500" : "black"} `} name="password" value={loginData?.password} onChange={handleChange} type="password" placeholder='Enter your Password' />
                                        {passwordError && <p className='text-red-500'>{passwordError}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <button className='w-full border p-3 bg-blue-500 rounded-xl text-white'>Submit</button>
                            </div>
                            <div className='mt-8 flex justify-center font-bold'>
                                Not registered?  <span className='text-pink-600 cursor-pointer'>&nbsp; Create an account</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
