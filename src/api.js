import axios from 'axios';

export default axios.create({
  baseURL: 'https://trackingchallenges.herokuapp.com/api',
});
