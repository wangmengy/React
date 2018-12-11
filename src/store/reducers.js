//把自分支数据添加到combineReducers
import {combineReducers} from 'redux-immutable'

import {reducer as cart} from '../pages/cart'

export default combineReducers({
    cart,
})