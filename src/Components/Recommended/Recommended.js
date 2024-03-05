import React from "react";
import './Recommended.css';
import thumbnaill1 from '../../Assets/thumbnail1.png';
import thumbnaill2 from '../../Assets/thumbnail2.png';
import thumbnaill3 from '../../Assets/thumbnail3.png';
import thumbnaill4 from '../../Assets/thumbnail4.png';
import thumbnaill5 from '../../Assets/thumbnail5.png';
import thumbnaill6 from '../../Assets/thumbnail6.png';
import thumbnaill7 from '../../Assets/thumbnail7.png';
import thumbnaill8 from '../../Assets/thumbnail8.png';


const Recommended = () =>{

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
            <div className="side-video-list">
               <img src={thumbnaill2} alt=""/>
               <div className="vid-info">
                  <h4>Best chanel that help you to be a web developer</h4>
                  <p>GreatStack</p>
                  <p>199k Views</p>
               </div>
            </div>
            <div className="side-video-list">
               <img src={thumbnaill3} alt=""/>
               <div className="vid-info">
                  <h4>Best chanel that help you to be a web developer</h4>
                  <p>GreatStack</p>
                  <p>199k Views</p>
               </div>
            </div>
            <div className="side-video-list">
               <img src={thumbnaill4} alt=""/>
               <div className="vid-info">
                  <h4>Best chanel that help you to be a web developer</h4>
                  <p>GreatStack</p>
                  <p>199k Views</p>
               </div>
            </div>
            <div className="side-video-list">
               <img src={thumbnaill5} alt=""/>
               <div className="vid-info">
                  <h4>Best chanel that help you to be a web developer</h4>
                  <p>GreatStack</p>
                  <p>199k Views</p>
               </div>
            </div>
            <div className="side-video-list">
               <img src={thumbnaill6} alt=""/>
               <div className="vid-info">
                  <h4>Best chanel that help you to be a web developer</h4>
                  <p>GreatStack</p>
                  <p>199k Views</p>
               </div>
            </div>
            <div className="side-video-list">
               <img src={thumbnaill7} alt=""/>
               <div className="vid-info">
                  <h4>Best chanel that help you to be a web developer</h4>
                  <p>GreatStack</p>
                  <p>199k Views</p>
               </div>
            </div>
            <div className="side-video-list">
               <img src={thumbnaill8} alt=""/>
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