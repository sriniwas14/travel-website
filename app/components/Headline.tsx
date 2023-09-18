import { Arima } from 'next/font/google'
import React from 'react'


const arima = Arima({ weight: ['400'], subsets: ['latin'] })

export default function Headline({ center, children, className }: { children: any, center?: boolean, className?: string }) {
    return (
        <h1 className={`${arima.className} ${className} ${center ? "text-center" : ""} text-gray-500 text-3xl`}>{children}</h1>
    )
}
