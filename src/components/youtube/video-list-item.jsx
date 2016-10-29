import React from 'react'
import '../../scss/video-list-item.scss'

const VideoListItem = ({video, selected}) => {

    const url = video.snippet.thumbnails.default.url;
    const VideoTitle = video.snippet.title;
    const videoDescription = video.snippet.description.slice(0, 70);
    return(
        <li className="video-list-item">
            <div className="media" onClick={()=>selected(video)}>
                <div className="media-left">
                    <img className="media-object" src={url} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <h6>{VideoTitle}</h6>
                    </div>
                    <p>{videoDescription}...</p>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;
