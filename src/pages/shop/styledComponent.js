import styled from 'styled-components'
import border from "../../components/styled/border"


const ShopWrap = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    background:#fff;
    height:100%;
`
const Stitle = styled.div`
    width:100%;
    height:.44rem;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#000;
    font-size:.17rem;
`
const StopContainer = styled.div`
    overflow:hidden;
    width:100%;
    height:100%;
    display:${props=>props.dis?"none":"block"};
`
const StopWrap = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    background:#fff;
`
const UserCont =border({
    component: styled.div`
    width:100%;
    padding:.15rem 0 .1rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:relative;
`,  width:"0 0 1px 0",

})
const First = styled.div`
    width:100%;
    height:.28rem;
    line-height:.28rem;
    color:#262626;
    text-align:center;
`
const Second = styled.span`
    position: relative;
    display: inline-block;
    font-size: .36rem;
    padding-bottom: .2rem;
    color: #ff9601;
    &::after{
        position: absolute;
        background-color: #757575;
        top: 78%;
        height: .04rem;
        right: -.1rem;
        bottom: 0;
        left: -.1rem;
        border-radius: 50%;
        content: '';
        opacity: .3;
    }
`
const Third = styled.div`
    width:100%;
    height:.18rem;
    line-height:.18rem;
    color:#262626;
    font-size:.12rem;
    text-align:center;
    margin-bottom:.1rem;
`
const Forth = styled.span`
    width:.96rem;
    height:.3rem;
    text-align:center;
    line-height:.3rem;
    color:#fff;
    background-color: #77bc1f;
    border-radius:.2rem;
`
const Tips = styled.span`
    width: .49rem;
    height:.21rem;
    line-height:.21rem;
    text-align:center;
    color:#fff;
    background-color: #77bc1f;
    font-size:.12rem;
    border-top-left-radius:.2rem;
    border-bottom-left-radius:.2rem;
    position:absolute;
    right:0rem;
    top:.47rem;
`
const Stwo =styled.ul`
    display:flex;
    li{
        flex:1;
        display:flex;
        padding-top:.05rem;
        padding-left:.1rem;
        padding-bottom:.05rem;
        img{
            width:.41rem;
            height:.47rem;
        }
        span{
            padding-top:.1rem;
            margin-left:.05rem;
            h3{
                font-weight:normal;
                font-size:.15rem;
            }
            h4{
                font-weight:normal;
                font-size:.12rem;
                color:#999;
            }
        }
    }
`
const SAd = styled.div`
    width:100%;
    height:1.172rem;
    img{
        width:100%;
        height:100%;
    }
`

const Shoptitle = styled.div`
    width:100%;
    line-height:.3rem;
    font-size:.12rem;
    color:#262626;
    background:#f9f9f9;
    position:relative;
    padding:.05rem 0;
    padding-left:.13rem;
    span{
        position:absolute;
        height:.2rem;
        width:.05rem;
        left:0rem;
        top:.1rem;
        background-color: #77bc1f;
    }
`
const ShopImgTit = styled.div`
    height:.4rem;
    padding-bottom:.05rem;
    width:100%;
    img{
        height:100%;
        width:100%;
    }
`
const ShopCon = styled.ul`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    justify-content:space-between;
    background:#f9f9f9;
`
const ShopItem = styled.li`
    display:flex;
    width:49.2%;
    flex-direction:column;
    align-items:center;
    margin-bottom:.05rem;
    img{
        width:100%;
        height:1.85rem;
    }
    h4{
        height:.21rem;
        color:#000;
        /* font-weight:normal; */
        font-size:.14rem;
        width:100%;
        text-indent:.05rem;
        background:#fff;
    }
    h5{
        height:.20rem;
        color:#999;
        font-weight:normal;
        width:100%;
        font-size:.12rem;
        text-indent:.05rem;
        background:#fff;
    }
    h3{
        img{
            width:.13rem;
            height:.13rem;
            margin-right:.05rem;
            margin-left:.05rem;
        }
        height:.22rem; 
        color:#77bc1f;
        display:flex;
        align-items:center;
        font-size:.14rem;
        background:#fff;
        width:100%;
        
    }
`
const Loadcontainer= styled.div`
    position:absolute;
    z-index:10;
    width:100%;
    height:100%;
    padding:25%;
    display:${props => props.isloading ? "none" : "block"};
    /* display:block; */
`
export{
    ShopWrap,
    Stitle,
    StopContainer,
    StopWrap,
    UserCont,
    First,
    Second,
    Third,
    Forth,
    Tips,
    Stwo,
    SAd,
    Shoptitle,
    ShopCon,
    ShopItem,
    ShopImgTit,
    Loadcontainer
}