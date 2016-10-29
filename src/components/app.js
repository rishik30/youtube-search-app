import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Search from './youtube/search'
import VideoList from './youtube/video-list'
import VideoDetail from './youtube/video-detail'
import '../scss/youtube-search-app.scss';
const API_KEY = "AIzaSyD7QBcdCWsCGQ2O2jAGAc3ctxphmZIQmqQ";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        }
    }

    componentWillMount() {
        this._handleInputChange('react js')
    }

  render() {
    return (
     <div className="yt-search-app">
         <h1>YOUTUBE Search App</h1>
         <br/>
         <Search onChange={searchTerm => this._handleInputChange(searchTerm)} />
         <div className="videos-wrapper">
             <VideoDetail video={this.state.selectedVideo} />
             <VideoList videos={this.state.videos} selected={selectedVideo => this._handleSelctedVideo(selectedVideo)} />
         </div>
     </div>
    );
  }

  _handleInputChange(searchTerm) {
      YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
          console.log(videos)
          this.setState({videos, selectedVideo: videos[0]})
      })
  }

  _handleSelctedVideo(selectedVideo) {
      console.log("selected",selectedVideo)
      this.setState({selectedVideo})
      setTimeout(()=> {
          console.log("state", this.state.selectedVideo)
      }, 100)
  }
}
