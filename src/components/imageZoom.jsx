import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

export default function ZoomImage({ src, style }) {
  const isWideScreen = useMediaQuery({ minWidth: 997 });

  return isWideScreen ? (
    <div className='zoomImage' style={{ textAlign: 'center' }}>
      <img src={useBaseUrl(src)} data-action='zoom' style={style} />
    </div>
  ) : (
    <div className='zoomImage' style={{ textAlign: 'center' }}>
      <img src={useBaseUrl(src)} style={style} />
    </div>
  );
}
