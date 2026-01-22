import React from 'react';

const SignUp = () => {
  return (
     <div className='h-screen flex items-center justify-center'>
        <div className='w-full m-2 h-contain md:w-2/3 lg:w-2/5 border border-pink-400 border-2 rounded-2xl'>
            <div className='lg:p-5'>
                <form>
                <div className='m-10 lg:m-10'>
                   <div className='text-center font-bold'>
                        <div className='text-3xl text-blue-500'>
                            BuyMySketch
                        </div>
                        <div className='mt-8 mb-10 text-xl'>
                            Enter your SignUp credentials
                        </div>
                   </div>
                   <div className=''>
                        <div className='flex flex-col gap-8'>
                             <div>
                                <h1 className='font-bold text-xl mb-2'>Name:</h1>
                                <input className="border  border-black w-full p-2" placeholder='Enter your Name'/>
                            </div>
                            <div>
                                <h1 className='font-bold text-xl mb-2'>Email:</h1>
                                <input className="border  border-black w-full p-2" placeholder='Enter your Email'/>
                            </div>
                            <div>
                                <h1 className='font-bold text-xl mb-2'>Password:</h1>
                                <input className="border border-black w-full p-2" placeholder='Enter your Password'/>
                            </div>
                             <div>
                                <h1 className='font-bold text-xl mb-2'>Role</h1>
                                <select className='w-1/3 md:w-2/3 border border-pink-600 p-2 rounded-2xl font-bold'>
                                    <option value="buyer" label="Buyer"></option>
                                    <option value="seller" label="Seller"></option>
                                </select>
                            </div>
                        </div>
                   </div>
                   <div className='mt-8'>
                    <button className='w-full border p-3 bg-blue-500 rounded-xl text-white cursor-pointer'>Submit</button>
                   </div>
                   <div className='mt-8 flex justify-center font-bold'>
                        Already registered?  <span className='text-pink-600 cursor-pointer'>&nbsp; Login</span>
                   </div>
                </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default SignUp;
