
import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';
import { combineReducers, createStore } from './redux';

const reducer = combineReducers({
    counter: counterReducer,
    info: infoReducer
  });
  
  // let initState = {
  //   counter: {
  //     count: 0
  //   },
  //   info: {
  //     name: '前端九部',
  //     description: '我们都是前端爱好者！'
  //   }
  // }
  
  let store = createStore(reducer);
  console.dir(store.getState());
  
  store.subscribe(() => {
    let state = store.getState();
    console.log(state.counter.count, state.info.name, state.info.description);
  });
  /*自增*/
  store.dispatch({
    type: 'INCREMENT'
  });
  
  // 赋值
  store.dispatch({
    type: 'SET_NAME',
    name: '前端九部2号'
  });