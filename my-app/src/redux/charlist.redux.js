import myAxios from '../myAxios';

const USER_LIST = 'USER_LIST';
const initState = {
  userList: []
};

// reduce
export function charList(state=initState, action) {
  switch (action.type) {
    case 'USER_LIST': {
      return { ...state, userList: action.data };
    }
    default: {
      return state;
    }
  }
}

function userList(data) {
  return {type: USER_LIST, data: data}
}

export function getCharList(type) {
  const url = `users?type=${type}`;
  return dispatch => myAxios('get', url)
    .then(reply => {
      dispatch(userList(reply.data.results));
    })
    .catch(err => {
      console.log(err);
    })
}

