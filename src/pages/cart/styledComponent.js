import styled from 'styled-components'

const CartCont = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
`
const CartWrap = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`
const Ctitle =styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    height:.44rem;
    background:#fff;
    font-size:.18rem
    i{
        position:absolute;
        display:flex;
        justify-content:center;
        align-items:center;
        left:0;
        top:0;
        width:.44rem;
        height:.44rem;
        /* background:#cc3; */
        
    }
    span{
        position:absolute;
        right:0;
        top:0;
        width:.44rem;
        height:.44rem;
        /* background:#c33; */
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:.12rem;
        color:#999;
    }
`
const Ctips = styled.div`
    width:100%;
    height:.3rem;
    display: flex;
    padding: .01rem .1rem 0;
    justify-content:space-between;
    background-color: #f9c0cb;
    p{
        color:#fff;
        font-size:.15rem;
        font-weight:500;
        line-height:.3rem;
        span{
            color:#fff;
            font-size:.15rem;
            font-weight:500;
            b{
                color:#fff;
                font-size:.15rem;
                font-weight:500;
            }
        }
    }
    div{
        color:#ee2e52;
        font-size:.12rem;
        font-weight:500;
        line-height:.3rem;
        display:flex;
        i{
            display:flex;
            justify-content:center;
            align-items:center;
            margin-left:.03rem;
        }
    }
`

const ListWrap = styled.div`
    height:100%;
    width:100%;
    overflow:scroll;
`
const List = styled.ul`
    height:max-content;
    width:100%;
`
 const ListItem = styled.li`
    height:.98rem;
    width:100%;
    margin-bottom:.03rem;
    display:flex;
    align-items:center;
    background:#fff;
    span{
        height:100%;
        width:.30rem;
        display:flex;
        justify-content:center;
        align-items:center;
        img{
            width:.17rem;
            height:.17rem;
            border-radius:.2rem;
        }
    }
    div{
        width:100%;
        display:flex;
        padding:.07rem 0 .08rem;
        /* background:#c33; */
        align-items:center;
        height:100%;
        .Img{
            width: .7031rem!important;
            height:.7031rem ;
            padding:0;
            border:.01rem solid #eee;
            img{
                width:100;
                height:100%;

            }
        }
        ul{
            width:100%;
            margin-left:.1rem;
            padding-top:.08rem;
            height:100%;
            li{
                width:100%;
                color:#000;
                font-size:.14rem;
                display:flex;
                justify-content:space-between;
                padding-right:.05rem;
                span{
                    color:#999;
                    font-size:.12rem;
                }
            }
            li{
                p{
                    color:#ee2e52;
                    font-size:.14rem;
                }
            }
            li:nth-child(3){
                height:.28rem;
                div{
                    height:100%;
                    color:#000;
                    font-size:.14rem;
                    border:.01rem solid #eee;
                    display:flex;
                    width:.98rem;
                    line-height:.28rem;
                    b:nth-child(1){
                        width:.4rem;
                        border-right:.01rem solid #eee;
                        text-align:center;
                        
                    }
                    input{
                        border:none;
                        width:.4rem;
                        height:100%;
                        text-align:center;
                    }
                    
                    b:nth-child(3){
                        width:.4rem;
                        text-align:center;
                        border-left:.01rem solid #eee;
                    }
                }
            }
        }
    }
 `
const BottomWrap = styled.div`
    width:100%;
    height:.45rem;
    display:flex;
    background:#fff;
    position:fixed;
    bottom: .5rem;
    .check{
        line-height:.45rem;
        span{
            margin:0 .07rem 0 .08rem;
        }
    }
`

const BottomToBuy =styled.div`
    flex:1;
    /* background:#c33; */
    display:flex;
    justify-content:flex-end;
`
const BottomDetail = styled.ul`
    flex:1;
    /* background:#800; */
    padding:.03rem 0 ;
    li{
        color:#999;
        font-size:.12rem;
        text-align:end;
    }
    li:nth-child(1){
        color:#262626;
        span{
            color:#ee2e52;
            padding-right:.04rem;
        }
    }
    li:nth-child(2){
        color:#999;
        span{
            color:#999;
            padding:0 .04rem;
        }
    }
`
const BottomBuy = styled.b`
    width:1.01rem;
    height:100%;
    color:#fff;
    background:#77bc1f;
    font-size:.17rem;
    font-weight:normal;
    display:flex;
    /* flex-direction:column;
    align-items:center; */
    justify-content:center;
    padding-top:.04rem;
    position:relative;
    span{
        font-size:.14rem;
        position:absolute;
        top:.24rem;
    }
`

const BottomToDel =styled.div`
    flex:1;
    /* background:#933; */
    display:flex;
    justify-content:flex-end;
    padding:.08rem .1rem .08rem 0;
    display:none;
    span{
        padding:.04rem .25rem;
        border:.01rem solid #ee2e52;
        color:#ee2e52;
        font-size:.14rem;
        border-radius:.02rem;
    }
`
export {
    CartCont,
    CartWrap,
    Ctitle,
    Ctips,
    ListWrap,
    List,
    ListItem,
    BottomWrap,
    BottomToBuy,
    BottomBuy,
    BottomToDel,
    BottomDetail
}