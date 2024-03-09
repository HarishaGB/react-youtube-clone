import React, { useState, useEffect } from "react";
import './Recommended.css';
import thumbnaill1 from '../../Assets/thumbnail1.png';
import thumbnaill2 from '../../Assets/thumbnail2.png';
import thumbnaill3 from '../../Assets/thumbnail3.png';
import thumbnaill4 from '../../Assets/thumbnail4.png';
import thumbnaill5 from '../../Assets/thumbnail5.png';
import thumbnaill6 from '../../Assets/thumbnail6.png';
import thumbnaill7 from '../../Assets/thumbnail7.png';
import thumbnaill8 from '../../Assets/thumbnail8.png';
import { API_KEY } from "../../data";
import moment from "moment";


const Recommended = ({categoryId}) =>{

    const [apiData, setApiData] = useState([]);
   console.log(apiData);
    const fetchData = async () =>{
        const  relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        //`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=setApiData(data.items))
    }

    useEffect(()=>{
        fetchData();
    },[]);//apiData

    return(
        <div className="recommended">
            <div className="side-video-list">
               <img src={thumbnaill1} alt=""/>
               <div className="vid-info">
                  <h4>Best chanel that help you to be a web developer</h4>
                  <p>GreatStack</p>
                  <p>199k Views</p>
               </div>
            </div>
        </div>
    )
}
export default Recommended;


   