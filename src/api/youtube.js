import axios from 'axios';
const KEY = "AIzaSyCn0H63y8Z28n7g-NkLhVrDpLGoDuQs6VM";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
});