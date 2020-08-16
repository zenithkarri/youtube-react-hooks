import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
    const [ videos, setVideos ] = useState([]);
    const [ selectedVideo, setSelectedVideo ] = useState(null);

    useEffect(() => {
        onTermSubmit('wives');
    }, []);

    const onTermSubmit = async (term) => {
        const KEY = 'AIzaSyDaA7lHgoDgPmbPay_vTNKE34nefVDCkX8';
        const { data } = await youtube.get('/search', {
            params:{
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: KEY,
                type: 'video'
            }
        });
        setVideos(data.items);
        setSelectedVideo(data.items[0]);
    };

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    return (
        <div className="ui container">
            <SearchBar onTermSubmit={onTermSubmit} />
            <div className="ui grid" >
                <div className="ui row" >
                    <div className="eleven wide column" >
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column" >
                        <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
};



// class App extends React.Component{
//     state={ videos: [], selectedVideo: null };
    
//     componentDidMount(){
//         this.onTermSubmit('buildings');
//     }

//     onTermSubmit = async (term) => {
//         const KEY = 'AIzaSyDaA7lHgoDgPmbPay_vTNKE34nefVDCkX8';
//         const response = await youtube.get('/search', {
//             params:{
//                 q: term,
//                 part: 'snippet',
//                 maxResults: 5,
//                 key: KEY,
//                 type: 'video'
//             }
//         });
//         this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
//     };
    
//     onVideoSelect = (video) => {
//         this.setState({ selectedVideo: video });
//     }

// render(){
//     return (
//         <div className="ui container">
//             <SearchBar onTermSubmit={this.onTermSubmit} />
            
//             <div className="ui grid" >
//                 <div className="ui row" >
//                     <div className="eleven wide column" >
//                         <VideoDetail video={this.state.selectedVideo} />
//                     </div>
//                     <div className="five wide column" >
//                         <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
//                     </div>
                    
//                 </div>
                
//             </div>
            
//         </div>
        
//     );
// };

// }

export default App;