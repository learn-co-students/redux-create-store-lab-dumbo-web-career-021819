export default function createStore(reducer) {
  let state;

  const dispatch = (action) => {
    state = reducer(state, action);
    render();
  };

  const getState = () => {
    return state;
  };

  dispatch({type: 'Blazé'})

  return {dispatch, getState}
}

function render() {
  const container = document.getElementById('container');
}
