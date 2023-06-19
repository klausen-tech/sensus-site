import React from 'react'


export default function Table({ values }) {
    return (
        <div className='specifications'>
            {Object.entries(values).map(([key, value]) => (
                <div key={key}>
                    <span style={{ fontWeight: 'bold', color: 'GrayText' }}>{key}</span>{' '}
                    <span style={{ float: 'right' }}>{value}</span>
                </div>
            ))}
        </div>
    )
}