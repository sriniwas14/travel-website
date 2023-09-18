import React from 'react'

export default function SectionThree({ children, background, className }: { children: any, background?: any, className?: string }) {
    return (
        <div className={`py-32 bg-center bg-fixed ${className}`} style={{ backgroundImage: `url("${background}")` }}>
            <div className='container mx-auto'>{children}</div>
        </div>
    )
}
