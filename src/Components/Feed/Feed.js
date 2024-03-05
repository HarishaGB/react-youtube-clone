import React, { useEffect, useState } from "react";
import './Feed.css';
import moment from "moment";
import thumbnail1 from '../../Assets/thumbnail1.png'
import thumbnail2 from '../../Assets/thumbnail2.png'
import thumbnail3 from '../../Assets/thumbnail3.png'
import thumbnail4 from '../../Assets/thumbnail4.png'
import thumbnail5 from '../../Assets/thumbnail5.png'
import thumbnail6 from '../../Assets/thumbnail6.png'
import thumbnail7 from '../../Assets/thumbnail7.png'
import thumbnail8 from '../../Assets/thumbnail8.png'
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import { value_converter } from "../../data";
// import axios from "axios";


const Feed = ({category}) =>{

    const [data, setData] = useState([]);

    const fetchData = async () =>{
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        //`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        //`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        // `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
       await fetch(videoList_url).then(Response=>Response.json()).then(data=>setData(data.items));
    }  
    
    useEffect(()=>{
        fetchData();
    },[category])
   console.log(data);
    return(
        <div className="feed">
             {data.map((item, index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle} </h3>
                <p>{value_converter(item.statistics.viewCount)} &bull: {moment(item.snippet.publishedAt).fromNow()} </p>
            </Link >
                )
             })}
            {/* <div className="card">
                <img src={thumbnail2} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail3} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail4} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail5} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail6} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail7} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail8} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail1} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail2} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail3} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail4} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail5} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail6} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail7} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div>
            <div className="card">
                <img src={thumbnail8} alt="" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull: 2days ago </p>
            </div> */}
        </div>
    )
}

export default Feed;