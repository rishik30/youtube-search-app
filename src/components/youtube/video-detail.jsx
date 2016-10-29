import React from 'react'
import '../../scss/video-detail.scss'

const VideoDetail = ({video}) => {

    if(!video) return <h2>Loading!!!</h2>
    const videoId = video.id.videoId;
    const src = `https://www.youtube.com/embed/${videoId}`;
    const VideoTitle = video.snippet.title;
    const videoDescription = video.snippet.description;

    return(
        <div className="video-detail col-md-6">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    className="embed-responsive-item"
                    src={src}>
                </iframe>
            </div>
            <div className="details">
                <h3>{VideoTitle}</h3>
                <p>{videoDescription}</p>
            </div>
        </div>
    )
}

export default VideoDetail;
