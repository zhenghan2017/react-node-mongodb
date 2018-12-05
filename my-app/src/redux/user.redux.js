import { Toast } from 'antd-mobile';
import myAxios from '../myAxios';
import { getRedirectPath } from '../unit';

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const FAIL = 'FAIL';
const LOAD_DATA = 'LOAD_DATA';
const LOGOUT = 'LOGOUT';

const initState = {
  account: '',
  type: '',
  msg: '',
  title: '',
  redirectTo: ''
};

// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case 'AUTH_SUCCESS': {
      return { ...state, msg: '', redirectTo: getRedirectPath(action.data), ...action.data };
    }
    case 'LOAD_DATA': {
      return { ...state, ...action.data };
    }
    case 'FAIL': {
      return { ...state, msg: action.msg };
    }
    case 'LOGOUT': {
      return { ...initState, redirectTo: '/login' }
    }
    default: return state;
  }
}

function autoHandle(data) {
  return { type: AUTH_SUCCESS, data: data }
}

function errHandle(msg) {
  Toast.offline(msg, 1);
  return { type: FAIL, msg: msg };
}

export function register({ account, pwd, title, repeatPwd, type }) {
  if (!account || !pwd || !title) {
    return errHandle('请输入完整的用户名,昵称和密码');
  }
  if (pwd !== repeatPwd) {
    return errHandle('两次输入的密码不一致');
  }
  const url = '/users/register';
  const params = { account, pwd, title, type };
  return dispatch => myAxios('post', url, params)
    .then(reply => {
      dispatch(autoHandle(reply.data.results));
    })
}

export function login({ account, pwd }) {
  if (!account || !pwd) {
    return errHandle('请输入完整的用户名和密码');
  }
  const url = '/login';
  const params = { account, pwd };
  return dispatch => myAxios('post', url, params)
    .then(reply => {
      dispatch(autoHandle(reply.data.results));
    })
}

export function complete(userInfo) {
  const url = '/users';
  const params = userInfo;
  return dispatch => myAxios('patch', url, params)
    .then(reply => {
      dispatch(autoHandle(reply.data.results));
    });
}

export function logout() {
  return { type: LOGOUT }
}

export function loadData(userInfo) {
  return { type: LOAD_DATA, data: userInfo }
}
