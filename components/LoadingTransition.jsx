import React from 'react'
import Loader from 'react-loader-spinner'

const LoadingTransition = ({ isLoading }) => {
  return (
    <div className={` ${isLoading ? 'opacity-100 z-50 visible' : 'opacity-0 z-0 invisible'}  top-0 left-0 transition duration-500 bg-white h-screen w-screen fixed flex justify-center items-center`}>
      <Loader
        type="Puff"
        color="#DB2777"
        height={100}
        width={100}
      />
    </div>
  )
}

export default LoadingTransition
