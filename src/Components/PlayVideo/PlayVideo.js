import React from "react";
import './PlayVideo.css'
import video1 from '../../Assets/video.mp4';
import like from '../../Assets/like.png';
import dislike from '../../Assets/dislike.png';
import share from '../../Assets/share.png';
import save from '../../Assets/save.png';
import jack from '../../Assets/jack.png';
import use_profile from '../../Assets/user_profile.jpg';

console.log("video");
const PlayVideo = () =>{
    return(
        <div className="play-video"> 
               <video src={video1} controls autoPlay muted  ></video>
               
        </div>
    )
}

export default PlayVideo;