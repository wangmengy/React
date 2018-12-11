import {GET_COUNT} from './actionTypes'
import { fromJS } from 'immutable';
const defaultState = fromJS({
    cartData:[]
})
export default (state = defaultState,action )=>{
    if (action.type ===GET_COUNT){
        var isID = null
        state.get("cartData").forEach((val) => {
            if (action.goods.id === val.get("id")) {
                isID = true
            }
        })
        // console.log(isID)
        if (!isID) {
            let cartData = state.get("cartData").insert(0, fromJS(action.goods))
            return fromJS({ cartData })
        } else {
            let cartData = state.get("cartData").map((val) => {
                // console.log(val.getIn(["id"]))
                // console.log(action.goods.id)
                if (action.goods.id === val.getIn(["id"])) {
                    // console.log(val)
                    return val.update("count", value => value + 1)
                    // return val.updataIn(["count"], value => value+1)
                }
                else {
                    return val
                }
            })
            return fromJS({cartData})
        }
        
    }
    return state;
}



        // console.log(state.getIn(['cartData']))
        // if (state.getIn(['cartData']).size===0){
        //     let cartData = state.get("cartData").insert(0, fromJS(action.goods))
        //     // console.log(cartData)
        //     return fromJS({cartData})
        // }
        // else{
        //     var isID = false;
        //     var index=0;
        //     state.get("cartData").forEach((val,ind)=>{
        //        // console.log(action.goods.id, val.getIn(["id"]))
        //         if (action.goods.id===val.getIn(["id"])) {
        //             isID=true;
        //             index=ind;
        //         }   
                
        //     })
            
        //     if(!!isID){
                
        //         let cartData = state.get("cartData").setIn([index,'count'],999)
        //        //s isID = false
        //         return cartData
        //     }
        //     else{
        //         let cartData = state.get("cartData").insert(0, fromJS(action.goods))
        //         return  cartData 
        //     }
            
        // }

