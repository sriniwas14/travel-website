import React from 'react'
import bgImage from '../assets/header_background.jpg'

export default function Header() {
    return (
        <div className='flex' style={{ background: `url('${bgImage.src}')`, height: '80vh', backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
            <div className='md:w-1/2 m-auto text-center py-10'>
                <h2 className='text-gray-600 text-2xl md:text-3xl'>Subhead One</h2>
                <h1 className='text-white text-4xl md:text-6xl'>Website.com</h1>
                <h2 className='text-gray-600 text-2xl md:text-3xl mb-8'>Subhead Two</h2>
                <div className='grid w-2/3 mx-auto'>
                    <div className='md:grid md:grid-cols-3 gap-3'>
                        <select className='w-full mb-2 md:mb-0 p-3'>
                            <option value="1">1-2 People</option>
                            <option value="2">3-5 People</option>
                            <option value="3">5+ People</option>
                        </select>
                        <input type="date" className='w-full p-3 mb-2 md:mb-0' placeholder='Arrival Date' />
                        <input type="date" className='w-full p-3 mb-2 md:mb-0' placeholder='Leave Date' />
                    </div>
                    <input placeholder='Phone No' type="text" className='w-full p-3 mt-3' />
                    <button className='w-full p-3 hover:bg-blue-400 transition-all mt-3 bg-blue-500 text-white'>Get Free Tour Details Now</button>
                </div>
            </div>
        </div>
    )
}
