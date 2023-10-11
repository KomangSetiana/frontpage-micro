import React from 'react'

import LogoAmazon from '../../../public/images/logo-amazon.svg'
import LogoMicrosoft from '../../../public/images/logo-microsoft.svg'
import LogoTesla from '../../../public/images/logo-tesla.svg'
import LogoGoogle from '../../../public/images/logo-google.svg'
import LogoFacebook from '../../../public/images/logo-facebook.svg'



export default function Clients() {
  return (
    <div className='flex justify-center items-center'>
        <div className="w-1/6 pr-6 pt-6">
            <img src="/images/logo-amazon.svg" alt="logo amazon" />
        </div>
        <div className="w-1/6 pr-6">
        <img src="/images/logo-facebook.svg" alt="logo facebook" />
        </div>
        <div className="w-1/6 pr-6">
        <img src="/images/logo-tesla.svg" alt="logo tesla" />
        </div>
        <div className="w-1/6 pr-6">
        <img src="/images/logo-microsoft.svg" alt="logo microsoft" />

        </div>
        <div className="w-1/6 pr-6">
        <img src="/images/logo-google.svg" alt="logo google" />

        </div>
    </div>
  )
}
