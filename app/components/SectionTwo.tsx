import React from 'react'
import Headline from './Headline'
import BodyText from './BodyText'

export default function SectionTwo() {
    return (
        <div className='container grid grid-cols-2 my-32 m-auto gap-16'>
            <div>
                <img src="/assets/2.jpg" className='w-full' />
                <Headline className='my-6'>Home Feeling</Headline>
                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit mattis tellus.</BodyText>
            </div>
            <div>
                <Headline className='mb-6 text-3xl'>Features</Headline>
                <text className='my-4 block font-medium'>$70 / night</text>
                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</BodyText>
            </div>
        </div>
    )
}
