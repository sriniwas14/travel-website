"use client"

import { Odor_Mean_Chey } from 'next/font/google'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaTwitter, FaGooglePlus, FaMarker, FaEnvelope, FaPhone, FaHamburger } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { usePathname } from 'next/navigation'


const odorMean = Odor_Mean_Chey({ weight: ['400'], subsets: ['latin'] })

const navItems = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Indian Destination", url: "/indian-destination" },
    { id: 3, title: "Travel Abroad", url: "/travel-abroad" },
    { id: 4, title: "Contact Us", url: "/contact-us" }
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
    const [collapsed, setCollapsed] = useState(true);
    const pathname = usePathname()

    useEffect(() => {
        setCollapsed(true)
    }, [pathname])

    return (
        <div>
            <div className='md:container-lg lg:container-lg xl:container mx-4 md:mx-auto md:flex my-4 md:my-8'>
                <div className='flex'>
                    <div className='flex'><div className='my-auto text-2xl'>Website.com</div></div>
                    <div className='ml-auto mt-1 md:mt-0 md:hidden block'>
                        <button onClick={() => setCollapsed((value) => !value)} className="px-2">
                            <AiOutlineMenu size={30} />
                        </button>
                    </div>
                </div>
                <div className={`md:flex bg-white z-10 absolute left-0 right-0 md:static p-6 md:p-0 flex-col md:flex-row ml-auto collapseMenu ${!collapsed ? "" : "hidden"}`}>
                    <div className='md:ml-auto  md:mt-3 md:flex'>
                        {
                            navItems.map(item => <Link key={item.id} className={`${odorMean.className} md:ml-10 ml-2 hover:text-primaryColor ${pathname !== item.url ? "" : "text-primaryColor"} text-lg block transition-all py-3 md:py-1`} href={item.url}>{item.title}</Link>)
                        }
                    </div>
                    <div className='flex mt-2 md:ml-4'>
                        {
                            socialItems.map(item => <Link key={item.id} className={'px-3 py-3 bg-primaryColor text-white rounded-full mx-1'} href={item.href}>{item.icon}</Link>)
                        }
                    </div>
                </div>
            </div>
            <div className='bg-primaryColor py-4 px-4'>
                <div className='md:container-lg lg:container-lg xl:container md:flex text-white mx-4 mx-auto'>
                    {
                        lowerHeaderItems.map(item => <div key={item.id} className='flex mr-16'><div className='mt-1 mr-2'>{item.icon}</div> {item.text}</div>)
                    }
                </div>
            </div>
        </div>
    )
}
