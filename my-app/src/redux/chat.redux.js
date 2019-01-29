import myAxios from '../myAxios';
import io from 'socket.io-client';
const socket = io('ws://localhost:5656');
const MSG_LIST = 'MSG_LIST';
const initState = {
  msgList: [],
  unread: 0
};

// reduce
export function chat(state = initState, action) {
  switch (action.type) {
    case MSG_LIST: {
      return { ...state, msgList: action.data, unread: action.data.filter(v => !v.read).length };
    }
    default: {
      return state;
    }
  }
}

function getMsgList(data) {
  return { type: MSG_LIST, data: data }
}

export function getChatList() {
  const url = '/users/msgList';
  return dispatch => myAxios('get', url)
    .then(res => {
      dispatch(getMsgList(res.data.msg));
    })
    .catch(err => {
      console.log(err);
    })
}

export function sendMsg({ from, to, content }) {
  return dispatch => {
    socket.emit('sendMsg', { from, to, content });
  }
}

