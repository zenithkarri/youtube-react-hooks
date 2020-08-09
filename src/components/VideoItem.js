import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {
    return (
        // onVideoSelect is a callback function that communicates to the grandparent: App component 
        <div onClick={() => props.onVideoSelect(props.video)} className="video-item item" >
            <img alt={props.video.snippet.title} className="ui image" src={ props.video.snippet.thumbnails.medium.url } />
            <div className="content">
                <div className="header">
                    { props.video.snippet.title }
                </div>
            </div>
        </div>
    );
}

export default VideoItem;