import React, { useEffect, useState } from "react";
import './PlayVideo.css'
import video1 from '../../Assets/video.mp4';
import like from '../../Assets/like.png';
import dislike from '../../Assets/dislike.png';
import share from '../../Assets/share.png';
import save from '../../Assets/save.png';
import jack from '../../Assets/jack.png';
import use_profile from '../../Assets/user_profile.jpg';
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

//console.log(apiData);
//console.log("video");
const PlayVideo = ({videoId}) =>{

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);

   
    const fetchVideoData = async () =>{
        //Fetching Videos Data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
         //`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]));
         console.log(apiData);
    }

    const fetchOtherData = async () =>{
        //Fetching Channel Data
        
    if(apiData){
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    }
                         //`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelID}&key=${API_KEY}`;
      await fetch(channelData_url).then(res => res.json()).then(data =>setChannelData(data.items[0]));
   }

    useEffect(()=>{
        fetchVideoData();
    })

    useEffect(()=>{
       fetchOtherData();
    },[apiData])

    return(
        <div className="play-video"> 
               {/* <video src={video1} controls autoPlay muted  ></video> */}
               <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
               <div className="play-video-info">
                    <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
                    <div>
                        <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
                        <span><img src={dislike} alt="" /></span>
                        <span><img src={share} alt="" />Share</span>
                        <span><img src={save} alt="" />Save</span>
                    </div>
               </div>
               <hr/>
               <div className="publisher">
                   <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt=""/>
                   <div>
                     <p>{apiData?apiData.snippet.channelTitle:""}</p>
                     <span>1M Subscribers</span>
                   </div>
                   <button>Subscribe</button>
               </div>
               <div className="vid-description">
                    <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
                    <hr/>
                    <h4>{apiData?value_converter(apiData.statistics.commentCount):102} Comments</h4>
                    <div className="comment">
                        <img src={use_profile} alt=""/>
                        <div>
                            <h3>Jack Nicholson <span>1 day ago</span></h3>
                            <p>Its very good video for students</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={use_profile} alt=""/>
                        <div>
                            <h3>Jack Nicholson <span>1 day ago</span></h3>
                            <p>Its very good video for students</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={use_profile} alt=""/>
                        <div>
                            <h3>Jack Nicholson <span>1 day ago</span></h3>
                            <p>Its very good video for students</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={use_profile} alt=""/>
                        <div>
                            <h3>Jack Nicholson <span>1 day ago</span></h3>
                            <p>Its very good video for students</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt=""/>
                            </div>
                        </div>
                    </div>
               </div>               
        </div>
    )
}

export default PlayVideo;