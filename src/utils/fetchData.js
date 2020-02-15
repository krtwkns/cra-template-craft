import axios from 'axios';

const fetchData = ({ url, method = 'GET', data = {} }) =>
  axios({
    url,
    method,
    data
  });

export default fetchData;
