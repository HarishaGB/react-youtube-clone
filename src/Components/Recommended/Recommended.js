import React, { useState, useEffect } from "react";
import './Recommended.css';
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";
// import thumbnaill1 from '../../Assets/thumbnail1.png';
// import thumbnaill2 from '../../Assets/thumbnail2.png';
// import thumbnaill3 from '../../Assets/thumbnail3.png';
// import thumbnaill4 from '../../Assets/thumbnail4.png';
// import thumbnaill5 from '../../Assets/thumbnail5.png';
// import thumbnaill6 from '../../Assets/thumbnail6.png';
// import thumbnaill7 from '../../Assets/thumbnail7.png';
// import thumbnaill8 from '../../Assets/thumbnail8.png';
// import moment from "moment";



 const Recommended = ({categoryId}) =>{

    const [apiData, setApiData] = useState([]);

    
       console.log(apiData);
       const fetchData = async () => {
                const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
                try {
                    const response = await fetch(relatedVideo_url);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setApiData(data.items);
                    console.log(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
    //     const fetchData = async () =>{
    //         const  relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
    //         //`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
    //         await fetch(relatedVideo_url).then(res=>res.json()).then(data=setApiData(data.items))
        
    // }


    useEffect(()=>{
        fetchData();
    },[]);//apiData

    return(
        <div className="recommended">
            {apiData.map((item, index)=>{
                return(
             <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
               <img src={item.snippet.thumbnails.medium.url} alt=""/>
               <div className="vid-info">
                  <h4>{item.snippet.title}</h4>
                  <p>{item.snippet.channelTitle}</p>
                  <p>{value_converter(item.statistics.viewCount)}</p>
               </div>
            </Link>
                )
            })}
        </div>
    )
}
export default Recommended;

// const Recommended = ({ categoryId }) => {
//     const [apiData, setApiData] = useState([]);
//     console.log(apiData);
 
//     const fetchData = async () => {
//         const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
//         try {
//             const response = await fetch(relatedVideo_url);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             setApiData(data.items);
//             console.log(data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }
 
//     useEffect(() => {
//         fetchData();
//     }, [categoryId]); 
 
//     return (
//         <div className="recommended">
//             <div className="side-video-list">
//                 {/* Example usage of apiData */}
//                 {apiData.map((video) => (
//                     <div key={video.id}>
//                         <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
//                         <div className="vid-info">
//                             <h4>{video.snippet.title}</h4>
//                             <p>{video.snippet.channelTitle}</p>
//                             <p>{video.snippet.viewsCount} Views</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
 
// export default Recommended;
   