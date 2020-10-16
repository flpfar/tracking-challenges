import axios from 'axios';

export default axios.create({
  baseURL: 'https://tracking-challenges.herokuapp.com/api',
});
