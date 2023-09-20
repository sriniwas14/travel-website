import React from 'react'
import sectionImage from '@/app/assets/section_one_image.jpg'
import Image from 'next/image'
import Headline from './Headline'
import BodyText from './BodyText'

import TwoSection from './TwoSection'
import { FaQuoteLeft } from 'react-icons/fa'

const sectionsOne = [
    { id: 1, image: "/assets/1.jpg", title: "Unbelieve Beautiful Kerala", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { id: 2, image: "/assets/2.jpg", title: "Comfortable Room", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { id: 3, image: "/assets/3.jpg", title: "Just Steps from the Center", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." }
]

type Card = {
    image: any,
    title: string,
    text: string
}

function Card({ image, title, text }: Card) {
    return (<div className='w-full px-6 mb-10 md:mb-0'>
        <img src={image} alt={title} className='mb-6' />
        <Headline className="mb-4" center={true}>{title}</Headline>
        <BodyText>{text}</BodyText>
    </div>)
}

export default function SectionOne() {
    return (
        <div>
            <div className='lg:container mx-auto'>
                <div className='flex p-8 lg:flex-row flex-col bg-white lg:-mt-20'>
                    <div>
                        <img className='w-full mb-10' src={'/assets/section_one_image.jpg'} alt='Section One Image' />
                    </div>
                    <div className='md:mx-20 md:my-auto'>
                        <Headline>Lets Plan Your Holiday in INDIA.</Headline>
                        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </BodyText>
                    </div>
                </div>

                <div className='md:grid md:grid-cols-3 md:gap-8 my-20'>
                    {
                        sectionsOne.map(section => <Card key={section.id} image={section.image} title={section.title} text={section.text} />)
                    }
                </div>
            </div>
            <TwoSection left={<>
                <img src={'/assets/section_one_left.jpg'} alt="One" />
            </>} right={
                <div className='flex h-full'>
                    <div className='m-auto'>
                        <div className='flex'>
                            <FaQuoteLeft className="mx-auto mb-8 text-4xl text-gray-200" />
                        </div>
                        <Headline className='md:text-center text-4xl mb-4 md:mb-20'>What They Say...</Headline>
                        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit<br />. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</BodyText>
                    </div>
                </div>
            } />
        </div>
    )
}
