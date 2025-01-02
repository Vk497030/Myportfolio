import {  Instagram, LinkedinIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 mt-10">
      <div className="container mx-auto flex flex-col  items-center">
        <div className="flex space-x-6 mb-6">
          <Link to="https://www.linkedin.com/in/sahityakashyap/" target='_blank' className="text-black hover:text-gray-600">
            <LinkedinIcon size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>

          <Link to="https://www.behance.net/gallery/206534693/Industrial-Design-Portfolio-2024" target='_blank' className="text-black hover:text-gray-600">
          <i className="fa-brands text-[25px] mt-[1px] mt fa-behance"></i>
          
            <span className="sr-only">Behance</span>
          </Link>
          <Link to="https://www.instagram.com/sahityakashyap.in/" target='_blank' className="text-black hover:text-gray-600">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
        <Link to="https://drive.usercontent.google.com/download?id=1GEXtBntq0FdfXy9fyE4nS1nMZt630KIo&export=download&authuser=1" className="mb-6 px-6 py-2 border border-black rounded-full text-black text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300">
          DOWNLOAD RESUME
        </Link>
        <p className="text-xs text-gray-500">
          © Sahitya Kashyap 2024 All Rights Reserved
        </p>
        <p className='text-xs text-gray-500 mt-1 '>Website Developed by <Link to="https://www.linkedin.com/in/daya-sagar-903676179?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bepu1n%2F1zTYqXbC%2BSnGKq6A%3D%3D" target='_blank' className='hover:underline text-gray-700'>Daya Sagar</Link> </p>
      </div>
    </footer>
  )
}

export default Footer