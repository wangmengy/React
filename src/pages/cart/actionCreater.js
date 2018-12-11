import {GET_COUNT} from './actionTypes'
const getCount = (goods)=>{
    return{
        type:GET_COUNT,
        goods,
    }
}
export{
    getCount
}