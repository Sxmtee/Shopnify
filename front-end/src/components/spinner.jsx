import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default () => {
  return(
    <div className='vh-100 vw-100 text-center'>
      <Spinner className='my-auto' animation="border" variant="warning" />
    </div>
  )
}

