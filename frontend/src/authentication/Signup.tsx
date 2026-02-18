import React from 'react';

const SignUp = () => {
  return (
     <div className='h-screen flex items-center justify-center'>
        <div className='w-full m-2 h-contain md:w-2/3 lg:w-2/5 border border-black border-2 rounded-2xl'>
            <div className='lg:p-5'>
                <form>
                <div className='m-10 lg:m-5'>
                   <div className='text-center font-bold'>
                        <div className='text-4xl text-gray-500'>
                            BuyMySketch
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
                    <button className='w-full border p-3 bg-gray-500 rounded-xl text-lg font-bold text-white cursor-pointer'>Submit</button>
                   </div>
                   <div className='mt-8 flex justify-center font-bold'>
                        Already registered?  <span className='text-gray-500 cursor-pointer underline'>&nbsp; Login</span>
                   </div>
                </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default SignUp;
