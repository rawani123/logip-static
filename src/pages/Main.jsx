import React from 'react'
import LeftSide from '../components/LeftSide'
import Middle from '../components/Middle'

const Main = () => {
  return (
    <>
      <div className='flex flex-row '>
        <div className='w-[15%]'><LeftSide/></div>
        <div className='w-[60%] px-8 py-6 border-r-2'><Middle/></div>
        <div className='w-[25%]'>RightSection</div>
      </div>
    </>
  )
}

export default Main
