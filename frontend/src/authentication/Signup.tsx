import React from 'react';
import { useState } from 'react';
import FormDataType from '../types/FormDataType';

const SignUp = () => {

    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        email: "",
        password: "",
        role: []
    });
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");


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

        }
        setFormData(values => ({
            ...values,
            [name]: value,
            role: ["buyer"]
        }));
    }



    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            console.log(formData);
            setFormData({
                name: "",
                email: "",
                password: "",
                role: ["buyer"]
            });

        }
        catch (error) {
            console.log("signup failed");
        }
    }

    return (
        <div className='h-contain flex w-full justify-center pt-10 '>
            <div className='mt-10  w-full overflow-hidden rounded-xl md:w-2/3 lg:w-2/3 xl:w-1/3 '>
                <div className='h-contain w-full border-amber-500 border-2 rounded-2xl'>
                    <div className='h-contain p-10'>
                        <form className='h-full w-full' onSubmit={handleOnSubmit}>
                            <div className=' md:m-3'>
                                <div className='text-center font-bold'>
                                    <div className='text-4xl text-rose-500'>
                                        Create an Account
                                    </div>
                                    <div className='mt-2 mb-10 text-lg'>
                                        Enter your SignUp credentials
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='flex flex-col gap-8'>
                                        <div>
                                            <h1 className='font-bold text-xl mb-1'>Name<span className='text-red-500'>*</span></h1>
                                            <input className="border border-black rounded-2xl w-full p-3 focus:outline-none focus:border-amber-500" name="name" value={formData?.name} onChange={handleChange} placeholder='Enter your Name' />
                                        </div>
                                        <div>
                                            <h1 className='font-bold text-xl mb-1'>Email<span className='text-red-500'>*</span></h1>
                                            <input className={`border  rounded-2xl w-full p-3 focus:outline-none focus:border-amber-500 ${emailError?"focus:outline-none border-red-500":"black"}`} name="email" value={formData?.email} onChange={handleChange} placeholder='Enter your Email' />
                                            {emailError && <p className='text-red-500'>{emailError}</p>}
                                        </div>
                                        <div>
                                            <h1 className='font-bold text-xl mb-1'>Password<span className='text-red-500'>*</span></h1>
                                            <input className={`border  rounded-2xl w-full p-3 focus:outline-none focus:border-amber-500 ${passwordError?"border-red-500":"black"} `} name="password" value={formData?.password} onChange={handleChange} type="password" placeholder='Enter your Password' />
                                            {passwordError && <p className='text-red-500'>{passwordError}</p>}
                                        </div>
                                        {/* <div>
                                <h1 className='font-bold text-xl mb-1'>Role<span className='text-red-500'>*</span></h1>
                                <select className='w-1/3 md:w-2/3 border border-black p-3 rounded-2xl font-bold' value={formData?.role} onChange={handleChangeRole}>
                                    <option value="buyer" label="BUYER"></option>
                                    <option value="seller" label="SELLER"></option>
                                </select>
                            </div> */}
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <button className='w-full border p-3 bg-rose-500 rounded-xl text-lg font-bold text-white cursor-pointer hover:bg-amber-500'>Submit</button>
                                </div>
                                <div className='mt-8 flex justify-center font-bold'>
                                    Already registered?  <span className='text-amber-500 cursor-pointer underline'>&nbsp; Login</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SignUp;
