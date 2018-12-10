import axios from 'axios';
import { Toast } from 'antd-mobile';

export default function myAxios(method, url, data = {}) {
  const options = {
    method: method,
    url: url,
    data: data,
    headers: { "content-type": "application/json" },
    timeout: 3000
  };
  return axios(options)
    .then(function (res) {
      switch (res.data.code) {
        case 1: {
          Toast.offline(res.data.msg, 2);
          return Promise.reject('break');
        }
        case 2: {
          return window.location.href = '/';
          // return Promise.reject('break');
        }
        default: return res;
      }
    })
    .catch(function (err) {
      if (err && err.request) {
        const str = err + '';
        if (str.search('timeout') !== -1) {
          Toast.offline('请求超时，请检查您的网络连接是否正常', 2);
          return new Promise(() => { });
        }
      }
      if (err && err.response) {
        switch (err.response.status) {
          case 404: {
            // 渲染404页面
            window.location.href = '/notFound'
            break;
          }
          case 500: {
            // 渲染错误页面
            window.location.href = '/error'
            break;
          }
          default: window.location.href = '/'
        }
        return new Promise(() => { });
      } else if (err && err === 'break') {
        return new Promise(() => { });
      } else {
        return err;
      }
    })
}