export default function createStore(reducer: (state:any ,action:any)=> void,initState?: any) {
    let state = initState;
    let listeners: any = [];
  
    /*订阅*/
    function subscribe(listener: ()=> void ) {
      listeners.push(listener);
    }
  
    function dispatch(action:any) {
        /*请按照我的计划修改 state*/
        state = reducer(state, action);
        for (let i = 0; i < listeners.length; i++) {
          const listener = listeners[i];
          listener();
        }
      }
  
    function getState() {
      return state;
    }

    dispatch({ type: Symbol() });
  
    return {
      subscribe,
      dispatch,
      getState
    }
  }