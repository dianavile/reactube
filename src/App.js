import React from 'react';
import { Grid } from "@material-ui/core";
import './App.css';
import youtube from '../src/api/youtube';
import { SearchBar } from './components';

//create classbased component with state
class App extends React.Component {
  //add state
  // state = {
  //   videos: [],
  //   selectedVideo:null
  // }
  //add methods()
  // handleVideoSelect = (video) => {
  //   this.setState({ selectedVideo: video})
  // }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCn0H63y8Z28n7g-NkLhVrDpLGoDuQs6VM",
        q: searchTerm,
      }
    })
    console.log(response.data.items);
    //this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }

  render() {
    return (
      //add Grid
      <div className="App">
      <Grid 
        container
        justify="center"
        alignItems="center">
        <Grid item xs={12}>
            <Grid container spacing={10}>
            <Grid item xs={12}> 
                <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8} className="videoDetail">
              VIDEODETAIL
            </Grid>
            <Grid item xs={4} className="videoList">
                VIDEOLIST
                <Grid item xs={12} className="videoItem">
                  VIDEOITEM
                </Grid>
                <Grid item xs={12} className="videoItem">
                  VIDEOITEM
                </Grid>
                <Grid item xs={12} className="videoItem">
                  VIDEOITEM
                </Grid>
                <Grid item xs={12} className="videoItem">
                  VIDEOITEM
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default App;