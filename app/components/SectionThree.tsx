import React from 'react'

export default function SectionThree({ children, background, className }: { children: any, background?: any, className?: string }) {
    return (
        <div className={`py-20 md:py-32 bg-center bg-fixed ${className}`} style={{ backgroundImage: `url("${background}")` }}>
            <div className='md:container-lg lg:container-lg xl:container mx-auto'>{children}</div>
        </div>
    )
}
