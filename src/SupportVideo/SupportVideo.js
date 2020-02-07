import React from "react";
import {NavLink} from 'react-router-dom'

function SupportVideo(props) {
  return (
    <div  className='support-video-main'>
      <div>Helping Video</div>
      <video width="800" height="600" controls="controls">
        <source src="../../video.mp4" />
      </video>
      <NavLink to='/'>
        <button>
          Main
        </button>
      </NavLink>
    </div>
  );
}

export default SupportVideo;
