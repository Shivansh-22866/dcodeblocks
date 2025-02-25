import React from 'react'
import DcodeLogo from '@/app/assets/images/dcodeblockslogo.png'
import Border from '@/app/assets/images/header-end.png'
import Image from 'next/image'
import CustomButton from '../components/CustomButton'

const Header = () => {
  return (
    <>
    <div className='flex items-center justify-between md:px-24 sm:px-12 px-2 py-4'>
        <Image src={DcodeLogo} alt="dcodeblocks logo" />
        <CustomButton size='large' text='Sign in'/>
    </div>
    <div>
      <Image width={1920} height={500} src={Border} alt='image' />
    </div>
    </>
  )
}

export default Header