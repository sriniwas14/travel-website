import React, { FC } from 'react'

export default function TwoSection({ left, right }: { left: any, right: any }) {
    return (
        <div className='grid grid-cols-2'>
            <div>
                {left}
            </div>
            <div>
                {right}
            </div>
        </div>
    )
}
