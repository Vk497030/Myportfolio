import React from 'react'
import { Helmet } from 'react-helmet-async'
import Gallery from './Gallery'

const Sandbox = () => {
  return (
    <div>
      <Helmet>
        <title>Sandbox | Sahitya Kashyap Portfolio</title>
        <meta name="description" content="Welcome to the portfolio of Sahitya Kashyap." />
      </Helmet>
      <div>
        <h1  className='text-lg mt-4 mb-10 font-normal text-center px-4'>
          Collection of Renders, Sketches, CAD & other small projects.
        </h1>
        <Gallery/>
      </div>
      </div>
  )
}

export default Sandbox