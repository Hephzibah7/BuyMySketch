import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='md:hidden'>
        <div className='w-full p-3 h-contain bg-pink-500'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                <div>icon</div>
                <div className='font-bold text-white text-2xl'>BuyMySketch</div>
            </div>
            <div className='flex gap-2'>
                <div>Account icon</div>
                <div>cart icon</div>
            </div>
        </div>
        <div className='mt-4'>
            <input className='w-full p-4 rounded-2xl' placeholder='Search BuyMySketch'/>
        </div>
        <div className='flex justify-start gap-2 font-bold text-white'>
            <div>Shop By <br></br>Category</div>
            <div>Sell</div>
        </div>

      </div>
       
    </div>
    <div className='bg-pink-300 h-contain w-full p-2 flex gap-2'>
        <div>location icon</div>
        <div>
            Address xyz
        </div>
    </div>
    </div>
    <div className="hidden md:flex">
        <div className='w-full h-contain bg-pink-500 p-3 text-white font-bold flex gap-4'>
            <div className='text-2xl'>
                BuyMySketch
            </div>
            <div>
                <div>
                    Deliever to username
                </div>
                <div className='flex gap-1'>
                <div>location icon</div>
                <div>Address xyz</div>
            </div>
            </div>
            <div className='grow'>
                <input className='w-full p-3 rounded-xl' placeholder='Search'/>
            </div>
            <div className='font-bold text-2xl'>
                Sell
            </div>
            <div>
                <div className='flex flex-col'>
                    <div>Hello username</div>
                    <div>
                        Accounts and Details
                    </div>
                </div>
            </div>
            <div>
                Returns & <br></br> Orders
            </div>
            <div>
                <div>cart icon</div>
                <div>Cart</div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Navbar;
