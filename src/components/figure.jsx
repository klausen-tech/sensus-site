/* eslint-disable react/prop-types,import/no-unresolved */
import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Image from '@theme/IdealImage';
import ZoomImage from './imageZoom';

export default function Figure({ src, caption }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <figure>
        <ZoomImage src={src} />
        <figcaption style={{
          textAlign: 'center',
          fontSize: 'smaller',
          color: 'gray',
        }}>{`${caption}`}</figcaption>
      </figure>
    </div>
  )
}