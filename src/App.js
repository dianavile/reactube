import React from 'react';
import { Grid } from "@material-ui/core";
import './App.css';
import youtube from '../src/api/youtube';

//create classbased component with state
class App extends React.Component {
  //add state
  state = {
    videos: [],
    selectedVideo:null
  }
  //add methods()
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video})
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet' ,
        maxResults: 5,
        key: 'KEY', 
        q: searchTerm
        }
    })
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
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
              <div>
              SEARCHBAR
              </div>
            </Grid>
            <Grid item xs={8}>
              <div>
                VIDEODETAIL
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
              VIDEOLIST
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default App;