import React from 'react'

const CustomDiv = ({heading,detail}) => {
  return (
    <div className='flex items-center  gap-2 '>
        <h1 className='text-xl font-bold'>{heading}:</h1>
        <p className='text-xl font-semibold'>{detail}</p>
    </div>
  )
}

export default CustomDiv