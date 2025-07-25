import { Loader2Icon } from 'lucide-react'
import React from 'react'

function loading() {
  return (
    <div className='flex items-center justify-center h-screen bg-white text-black'>
        <Loader2Icon className='animate-spin h-10 w-10 text-primary' />
    </div>
  )
}

export default loading