import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
    const VideoArray = props.videos.map((v) => {
        return (
            <VideoItem key={v.id.videoId} onVideoSelect={props.onVideoSelect} video={v} />
        );
    });
return <div className="ui relaxed divided list">{VideoArray}</div>;
};

export default VideoList;