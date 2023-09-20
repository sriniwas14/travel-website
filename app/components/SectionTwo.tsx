import React from 'react'
import Headline from './Headline'
import BodyText from './BodyText'

export default function SectionTwo() {
    return (
        <div className='md:container md:grid md:grid-cols-2 my-16 md:my-32 m-auto gap-16'>
            <div className='mx-4 md:mx-4'>
                <img src="/assets/2.jpg" className='w-full' />
                <Headline className='my-6'>Home Feeling</Headline>
                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit mattis tellus.</BodyText>
            </div>
            <div className='mx-4 md:mx-4'>
                <Headline className='mb-6 text-3xl mt-6 md:mt-0'>Features</Headline>
                <text className='my-4 block font-medium'>$70 / night</text>
                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</BodyText>
            </div>
        </div>
    )
}
