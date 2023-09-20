import React from 'react'
import SectionThree from '../components/SectionThree'
import Headline from '../components/Headline'

const tours = [
    {
        "id": 1,
        "title": "Enchanting Himalayan Adventure",
        "desc": "Embark on a mesmerizing journey through the breathtaking landscapes of the Himalayas. Explore serene mountain villages, witness stunning sunrises, and embrace the tranquility of nature.",
        "image": "/assets/1.jpg"
    },
    {
        "id": 2,
        "title": "Cultural Extravaganza in Rajasthan",
        "desc": "Immerse yourself in the vibrant culture of Rajasthan, where every corner tells a story. Visit majestic palaces, colorful bazaars, and savor the flavors of authentic Rajasthani cuisine.",
        "image": "/assets/2.jpg"
    },
    {
        "id": 3,
        "title": "Kerala's Backwater Bliss",
        "desc": "Experience the serenity of Kerala's backwaters as you glide along tranquil canals in traditional houseboats. Discover lush green landscapes, exotic wildlife, and indulge in local spices.",
        "image": "/assets/3.jpg"
    },
    {
        "id": 4,
        "title": "Golden Triangle of India",
        "desc": "Explore the iconic Golden Triangle of India, a captivating circuit that connects Delhi, Agra, and Jaipur. Witness the grandeur of the Taj Mahal, marvel at the intricate carvings of the Red Fort, and soak in the vibrant culture of these bustling cities.",
        "image": "/assets/3.jpg"
    },
    {
        "id": 5,
        "title": "Wildlife Safari in Ranthambore National Park",
        "desc": "Embark on a thrilling wildlife safari in Ranthambore National Park, one of the best places to spot tigers in India. Encounter other majestic creatures such as leopards, sloth bears, and crocodiles as you explore the park's diverse landscapes.",
        "image": "/assets/2.jpg"
    },
    {
        "id": 6,
        "title": "Serene Beach Vacation in Goa",
        "desc": "Unwind on the pristine beaches of Goa, a tropical paradise known for its laid-back vibes, vibrant nightlife, and delectable seafood. Bask in the sun, swim in the azure waters, and indulge in the coastal charm of Goa.",
        "image": "/assets/1.jpg"
    }
];

export default function TravelAbroad() {
    return (
        <div className='csFadeInUp'>
            <SectionThree className='bg-cover bg-bottom' background={"/assets/abroad.jpg"}>
                <div className='px-10 grid grid-cols-1'>
                    <Headline className='text-5xl md:text-6xl text-white'>Travel Abroad</Headline>
                </div>
            </SectionThree>
            <SectionThree >
                <div className='text-center text-3xl mb-8'>Packages</div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-4'>
                    {
                        tours.map((item: any) =>
                            <div key={item.id} className='shadow-md cursor-default rounded-xl overflow-hidden'>
                                <img src={item.image} />
                                <div className='m-3'>
                                    <div className='text-xl mb-2'>{item.title}</div>
                                    <div className='text-gray-500 truncate'>{item.desc}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </SectionThree>
        </div>
    )
}
