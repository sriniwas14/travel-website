import { Odor_Mean_Chey } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTwitter, FaGooglePlus, FaMarker, FaEnvelope, FaPhone } from 'react-icons/fa'


const odorMean = Odor_Mean_Chey({ weight: ['400'], subsets: ['latin'] })

const navItems = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Indian Destination", url: "/" },
    { id: 3, title: "Travel Abroad", url: "/" },
    { id: 4, title: "Contact Us", url: "/" }
]

const socialItems = [
    { id: 1, icon: <FaFacebookF />, href: "#1" },
    { id: 2, icon: <FaTwitter />, href: "#2" },
    { id: 3, icon: <FaGooglePlus />, href: "#3" }
]

const lowerHeaderItems = [
    { id: 1, icon: <FaMarker />, text: "New Delhi" },
    { id: 2, icon: <FaEnvelope />, text: "sales@travelsite.com" },
    { id: 3, icon: <FaPhone />, text: "24/7 +91 1234567890" }
]

export default function Nav() {
    return (
        <div>
            <div className='container mx-auto flex my-8'>
                <div>Logo</div>
                <div className='ml-auto flex'>
                    {
                        navItems.map(item => <Link key={item.id} className={`${odorMean.className} ml-10 hover:text-primaryColor text-lg transition-all py-1`} href={item.url}>{item.title}</Link>)
                    }
                </div>
                <div className='flex ml-4'>
                    {
                        socialItems.map(item => <Link key={item.id} className={'px-3 py-3 bg-primaryColor text-white rounded-full mx-1'} href={item.href}>{item.icon}</Link>)
                    }
                </div>
            </div>
            <div className='bg-primaryColor py-4'>
                <div className='container text-white flex mx-auto'>
                    {
                        lowerHeaderItems.map(item => <div key={item.id} className='flex mr-16'><div className='mt-1 mr-2'>{item.icon}</div> {item.text}</div>)
                    }
                </div>
            </div>
        </div>
    )
}
