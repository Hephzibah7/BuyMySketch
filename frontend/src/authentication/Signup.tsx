import React from 'react';

const SignUp = () => {
  return (
     <div className='h-contain flex lg:justify-between justify-center w-full'>
        <div className=' min-w-3/5 lg:w-1/3 md:p-5 m-5 flex justify-center w-full'>
        <div className='h-contain w-full border-amber-500 border-2 rounded-2xl'>
            <div className='h-contain p-10'>
                <form className='h-full w-full'>
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
                                <input className="border  border-black  rounded-2xl w-full p-3" placeholder='Enter your Name'/>
                            </div>
                            <div>
                                <h1 className='font-bold text-xl mb-1'>Email<span className='text-red-500'>*</span></h1>
                                <input className="border  border-black  rounded-2xl w-full p-3" placeholder='Enter your Email'/>
                            </div>
                            <div>
                                <h1 className='font-bold text-xl mb-1'>Password<span className='text-red-500'>*</span></h1>
                                <input className="border border-black  rounded-2xl w-full p-3" placeholder='Enter your Password'/>
                            </div>
                             <div>
                                <h1 className='font-bold text-xl mb-1'>Role<span className='text-red-500'>*</span></h1>
                                <select className='w-1/3 md:w-2/3 border border-black p-3 rounded-2xl font-bold'>
                                    <option value="buyer" label="BUYER"></option>
                                    <option value="seller" label="SELLER"></option>
                                </select>
                            </div>
                        </div>
                   </div>
                   <div className='mt-5'>
                    <button className='w-full border p-3 bg-rose-500 rounded-xl text-lg font-bold text-white cursor-pointer'>Submit</button>
                   </div>
                   <div className='mt-8 flex justify-center font-bold'>
                        Already registered?  <span className='text-amber-500 cursor-pointer underline'>&nbsp; Login</span>
                   </div>
                </div>
                </form>
            </div>
        </div>
        </div>
        <div className=' max-w-2/3 lg-2/3 h-screen hidden lg:flex  item-center justify-center '>
            <img className="object-cover " src="Hero.jpeg"/>
        </div>

    </div>
  );
};

export default SignUp;
