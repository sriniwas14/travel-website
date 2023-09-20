import React from 'react'
import SectionThree from '../components/SectionThree'
import Headline from '../components/Headline'

export default function TravelAbroad() {
    return (
        <div className='csFadeInUp'>
            <SectionThree className='bg-cover bg-bottom' background={"/assets/abroad.jpg"}>
                <div className='px-10 grid grid-cols-1'>
                    <Headline className='text-5xl md:text-6xl text-white'>Contact Us</Headline>
                </div>
            </SectionThree>
            <SectionThree >
                <div className='lg:w-2/3 w-full mx-auto px-4 md:px-0'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                        <input type="text" className='p-4 bg-gray-200' placeholder="Name" />
                        <input type="text" className='p-4 bg-gray-200' placeholder="Phone" />
                        <input type="text" className='p-4 bg-gray-200' placeholder="Email" />
                    </div>
                    <textarea className='w-full p-4 bg-gray-200 mb-4' placeholder='Message' rows={3}></textarea>
                    <button className='w-full p-4 bg-blue-500 hover:bg-blue-400 text-white transition-all'>Send</button>
                </div>
            </SectionThree>
        </div>
    )
}
