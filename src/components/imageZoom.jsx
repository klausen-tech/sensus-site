import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'


export default function ZoomImage({ src, style }) {
    return (
        <div className='zoomImage' style={{textAlign: "center"}} >
            <img src={useBaseUrl(src)} data-action="zoom" style={style}/>
        </div>
    )
}