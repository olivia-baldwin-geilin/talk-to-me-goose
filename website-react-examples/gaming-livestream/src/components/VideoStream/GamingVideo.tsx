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
      <source src='https://storage.googleapis.com/videosbucket46548765/vid.mp4' />
    </video>
  );
};
