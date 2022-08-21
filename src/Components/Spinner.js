import React from 'react'
import loader from "./loading.gif"

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center my-4">
      <img src={loader} alt='Aik Spinner ha' />
    </div>
  )
}

export default Spinner