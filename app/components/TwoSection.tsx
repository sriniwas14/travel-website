import React, { FC } from 'react'

export default function TwoSection({ left, right }: { left: any, right: any }) {
    return (
        <div className='md:grid md:grid-cols-2'>
            <div>
                {left}
            </div>
            <div className='p-8'>
                {right}
            </div>
        </div>
    )
}
