import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16' >


        <div className='mb-6'>

              <Image src="/logo-light.svg" width={150} height={100} className="h-14 w-60" alt="" />
        </div>
        
        <hr />

        <div className='mt-6'>

            <p>All rights reserved 2025 © Sports.com</p>
        </div>
    </div>
  )
}

export default Footer