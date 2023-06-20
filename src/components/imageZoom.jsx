import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'


export default function ZoomImage({ src, style }) {
    return (
        <div className='zoomImage' >
            <img src={useBaseUrl(src)} data-action="zoom" style={style}/>
        </div>
    )
}