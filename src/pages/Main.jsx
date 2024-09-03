import React from 'react'
import LeftSide from '../components/LeftSide'

const Main = () => {
  return (
    <>
      <div className='flex flex-row '>
        <div className='w-1/5'><LeftSide/></div>
        <div className='w-2/4'>Middlesection</div>
        <div className='w-1/5'>RightSection</div>
      </div>
    </>
  )
}

export default Main
