import React from 'react'
import VideoListItem from './video-list-item'

const VideoList = ({videos, selected}) => {

    return(
        <ul className="video-list col-md-6">
            {videos.map((video) => {
                return <VideoListItem
                            key={video.etag}
                            video={video}
                            selected={selected.bind(this)} />
            })}
        </ul>
    )
}

export default VideoList;
