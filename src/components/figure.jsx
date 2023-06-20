/* eslint-disable react/prop-types,import/no-unresolved */
import React from 'react'
import ZoomImage from './imageZoom';

export function Figure({ src, caption, imgStyle }) {
  return (
    <div>
      <figure>
        <ZoomImage src={src} style={imgStyle} />
        <figcaption style={{
          textAlign: 'center',
          fontSize: 'smaller',
          color: 'gray',
        }}>{`${caption}`}</figcaption>
      </figure>
    </div>
  )
}

export function CenteredFigure({ src, caption, imgStyle }) {
  return (
    <div style={{ textAlign: "center" }}>
      <Figure src={src} caption={caption} imgStyle={imgStyle}/>
    </div>
  )
}