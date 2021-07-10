import axios from 'axios';

const config = {
  headers: {'Access-Control-Allow-Origin': '*'},
  data: {},
};
const instance = axios.create(config);

instance.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json';
  config.data = {};
  return config;
});
export default instance;
