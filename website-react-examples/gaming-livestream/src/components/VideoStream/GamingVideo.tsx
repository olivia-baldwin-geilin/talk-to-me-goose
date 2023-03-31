import React from 'react';
import type { LayoutControllerContext } from '../../context/LayoutController';

type GamingVideoProps = {
  chatVisible: LayoutControllerContext['chatVisible'];
}

export const GamingVideo = ({ chatVisible }: GamingVideoProps) => {
  return (
    <video
      autoPlay
      muted
      loop
      controls
      className={`video-container ${chatVisible}`}
    >
      <source src='https://storage.googleapis.com/videosbucket46548765/Star%20Trek_%20Picard%20_%20Season%203%20Official%20Trailer%20_%20Paramount%2B.mp4' />
    </video>
  );
};