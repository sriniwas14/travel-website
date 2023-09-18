import React from 'react'


export default function BodyText({ children, className }: { children: any, className?: string }) {
    return (
        <p className={`text-gray-500 text-md ${className}`}>{children}</p>
    )
}
