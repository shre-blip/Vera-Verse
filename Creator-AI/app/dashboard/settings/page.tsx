import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='flex items-center bg-white text-black justify-center h-full'>
        <UserProfile routing="hash"/>
    </div>
  )
}

export default Settings