//创建仓库
import {createStore,applyMiddleware} from "redux"
//引入immutable
import Immutable from "immutable"
//处理异步
import thunk from 'redux-thunk'
//引入reducers 数据处理
import reducers from './reducers'

//创建store
const initialState = Immutable.Map();
const store = createStore(reducers,initialState,applyMiddleware(thunk))

export default store;
