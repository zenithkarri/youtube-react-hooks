import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {
    return (
        // onVideoSelect is a callback function that communicates to the grandparent: App component 
        <div onClick={() => props.onVideoSelect(props.video)} className="video-item item" >
            <img className="ui image" src={ props.video.snippet.thumbnails.medium.url } />
            <div className="content">
                <a className="header">
                    { props.video.snippet.title }
                </a>
            </div>
        </div>
    );
}

export default VideoItem;