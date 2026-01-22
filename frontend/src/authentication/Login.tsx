import React from 'react';

const Login = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='w-full m-2 h-2/3 md:w-2/3 lg:w-2/5 border border-pink-400 border-2 rounded-2xl'>
            <div className='lg:p-5'>
                <form>
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
                                <h1 className='font-bold text-xl mb-2'>Email:</h1>
                                <input className="border  border-black w-full p-2" placeholder='Enter your Email'/>
                            </div>
                            <div>
                                <h1 className='font-bold text-xl mb-2'>Password:</h1>
                                <input className="border border-black w-full p-2" placeholder='Enter your Password'/>
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
