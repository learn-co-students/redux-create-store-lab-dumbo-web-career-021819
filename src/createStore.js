export default function createStore(reducer) {
  // add your code here
  let state; 
  function getState() {
    return state;
  }

  function dispatch(action) {
    // take action, update state using reducer, call render
    state = reducer(state, action);
    render()
  }

  dispatch({type: '@@INIT'})
  return {getState, dispatch}
}

function render() {
  const container = document.getElementById('container');
}
