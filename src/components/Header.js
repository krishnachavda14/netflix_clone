import React from 'react'

const Header = () => {
  return (
    <div className='absolute top-0 z-10 w-full bg-gradient-to-b from-black px-8 py-4 md:px-16'>
      <img
        className='w-36 md:w-44'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='logo'
      />
    </div>
  )
}

export default Header