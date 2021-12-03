import React from 'react'
import Loader from 'react-loader-spinner'

const LoadingTransition = ({ isLoading, useLoader }) => {
  return (
    <div className={` ${isLoading ? 'opacity-100 z-50 visible' : 'opacity-0 z-0 invisible'}  top-0 left-0 transition duration-75 bg-white h-screen w-screen fixed flex justify-center items-center`}>
      {useLoader && (
        <Loader
          type="Puff"
          color="#DB2777"
          height={80}
          width={80}
        />
      )
      }
    </div>
  )
}

export default LoadingTransition
