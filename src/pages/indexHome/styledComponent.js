import styled from 'styled-components'
import ellipsis from '../../components/styled/ellipsis'
const HomeScroll = styled.div`
    height:100%;
    width:100%;
    /* overflow-y:scroll; */
    overflow:hidden;
    background:#eee;
`

const HomeContainer = styled.div`
    width:100%;
    height:max-content;
`

const SwiperContainer = styled.div`
    font-size:0;
    width:100%;
    padding-bottom:62.5%;
    position:relative;
    img{
        position:absolute;
        width:100%;
        height:100%;
    }
    .slider-slide{
        position:absolute!important;
        height:100%!important;
        width:100%!important;
    }
    .slider-list{
        position:absolute!important;
        height:100%!important;
        width:100%!important;
    }
    .slider-frame{
        position:absolute!important;
        height:100%!important;
        width:100%!important;
    }
    .slider {
        position:absolute!important;
        height:100%!important;
        width:100%!important;
        
    }
    .am-carousel-wrap{
        text-align:right;
        padding-right:.1rem;
        padding-top:.03rem;
    }
    .am-carousel-wrap-dot>span{
        width:.09rem;
        height:.02rem;
        border-radius:0;
        background-color: rgba(236,236,236,.4);
    }
    .am-carousel-wrap-dot-active>span{
        background:#fff;
    }
`

// const Fixed = styled.div`
//     height:100%;
//     overflow:hidden;
// `
const IndexNavwrap = styled.div`
    width: 100%;
    height:.4rem;
    background:#fff;
`

const IndexNav = styled.div`
    display:flex;
    width:max-content;
    height:100%;
`

const IndexItem = styled.div`
    padding:0 .1rem;
    position:relative;
    height:100%;
    display:flex;
    align-items:center;
    span{
        color:${props => props.active ? "#77bc1f":'#262626'};
        font-size:.12rem;
        height:100%;
        line-height:.4rem;
        border-bottom:${props => props.active ? ".02rem solid #77bc1f" : 'none'};
    }
    img{
        position:absolute;
        top:.03rem;
        right:0;
        width:.15rem;
    }
`

const MainContainerA = styled.div`
    margin-top:.03rem;
    width:100%;
    /* background:#c33; */
    display: ${props => props.dis ? "block" : 'none'};
`

const Adpic = styled.div`
    position:relative;
    width:100%;
    padding-bottom:31.25%;
    font-size:0;
    background:#fff;
    img{
        position:absolute;
        width:100%;
        height:100%
    }
`
const Navpic = styled.ul`
    background:#fff;
    width:100%;
    height:1.64rem;
    display:flex;
    flex-wrap:wrap;
    li:nth-child(1){
        width:28.125%;
    }
    li:nth-child(2){
        width:21.875%;
    }
    li:nth-child(3){
        width:21.875%;
    }
    li:nth-child(4){
        width:28.125%;
    }
    li:nth-child(5){
        width:28.125%;
    }
    li:nth-child(6){
        width:21.875%;
    }
    li:nth-child(7){
        width:21.875%;
    }
    li:nth-child(8){
        width:28.125%;
    }
`
const NavpicItem=styled.li`
    height:50%;
    img{
        width:100%;
        height:100%;
    }
`
const Threepic = styled.ul`
    margin-top:.05rem;
    width:100%;
    height:1.582rem;
    display:flex;
    justify-content:space-between;
    li{
        width:32.8%;
        font-size:0;
        position:relative;
        height:1.582rem;
        img{
            position:absolute;
            width:100%;
            height:100%
        }
    }
`
const SwiperMidContainer = styled.div`
    margin-top:.05rem;
    height:2.4rem;
    width:100%;
    /* background:#cee; */
    position:relative;
    .slider{
        background:#fff;
        margin-top:.1rem;
        .slider-decorator-0{
            display:none;
        }
    }
`
const Timecon = styled.div`
    position:absolute;
    bottom: -.15rem;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    h2{
        font-weight:normal;
        padding:.05rem;
        border-radius:.2rem;
        padding:.02rem .3rem;
        background:#fff;
        color:#262626;
        font-size:.14rem;
    }

`
const EndTimecon= styled.div`
    h2{
        background:#fff;
        color:#262626;
        font-size:.22rem;
    }
`

const SwiperLastContainer =styled.div`
    width:100%;
    height:1.515rem;
    background:#fff;
    margin-top:.05rem;
`
const Lastbox = styled.div`
    width:100%;
    height:100%;
    display:flex;
    .slider{
        width:50%!important;
    }
    .slider-decorator-0{
        display:none;
    }
    /* background:pink; */
`
const Leftbox=styled.div`
    position:relative;
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    >img{
        position:absolute;
        top:.05rem;
        left:.1rem;
        width:.55rem;
        height:.55rem;
    }
    p{
        width:100%;
        height:.22rem;
        line-height:.22rem;
        color:#ee2e52;
        font-size:.16rem;
        position:relative;
        text-indent:1.05rem;
        img{
            position:absolute;
            left:.8rem;;top:0;
            height:100%;
        }
    }
    b{
        width:100%;
        height:.24rem;
        line-height:.24rem;
        color:#262626;
        font-size:.12rem;
        text-indent:.75rem;
    }
`
const Rightbox = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    div{
        width:.88rem;
        height:.88rem;
        margin-left:.1rem;
        margin-bottom:.1rem;
        img{
            height:100%;
            width:100%;
        }
    }
    h2{
        margin-top:0;
        padding:0;
    }
    i{
        position:absolute;
        width:.24rem;
        height:.24rem;
        right:.4rem;
        bottom:.2rem;
        img{
            width:100%;
            height:100%;
        }
    }
`
const TopContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin-top:.05rem;
`
const TopWrap = styled.ul`
    width:100%;
    position:relative;
    padding-bottom:31.25%;
    font-size:0;
    img{
        width:100%;
        height:100%;
        position:absolute;
    }

`
const BestGood =styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin-top:.05rem;
`

const TalkGood = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin-top:.05rem;
`
const TalkWrap = ellipsis({
    component: 
        styled.ul`
        width:100%;
        border-top: .03rem solid #eee;
        padding: .05rem .08rem 0;
        color: #777;
        span{
            color:#77bc1f;
        }
`   , lineClamp:2
})
const MainContainerB = styled.div`
    display: ${props => !props.dis ? "block" : 'none'};
    margin-top:.02rem;
    width:100%;
    /* height:10rem; */
    /* background:#cc3; */
`
const BAd = styled.div`
    position:relative;
    font-size:0;
    width:100%;
    padding-bottom:34.4%;
    img{
        position:absolute;
        width:100%;
        height:100%;
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

const BContent = styled.div`
    width:100%;
    flex-direction:column;
`
const Btitle=styled.div`
    span{
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 1;
        width: .12rem;
        height: .1rem;
        background-color: #77bc1f;
    }
    position: relative;
    height:.32rem;
    padding: 0 0 0 .16rem;
    font-size:.11rem;
    color:#262626;
    line-height:.38rem;
`
const Bgoods = styled.ul`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`
const BgoodsItem = styled.li`
    display:flex;
    flex-direction:column;
    background:#fff;
    width:49.2%;
    /* height:2.535rem; */
    margin-top:.05rem;
    div{
        position:relative;
        font-size:0;
        width:100%;
        padding-bottom:100%;
        img{
            position:absolute;
            width:100%;
            height:100%;
        }
        img:nth-child(2){
            position:absolute;
            top:0;
            left:0;
            width:.46rem;
            height:.46rem;
        }
    }
`
const T1 = ellipsis({
    component:
        styled.h2`
        margin-top:.05rem;
        font-weight:normal;
        width:100%;
        padding:0 .1rem;
        height:.21rem;
        line-height:.21rem;
        color:#000;
        font-size:.14rem;
    `
})

const T2 = ellipsis({
    component: 
        styled.h2`
        font-weight:normal;
        width:100%;
        padding:0 .1rem;
        height:.21rem;
        line-height:.21rem;
        color:#777;
        font-size:.12rem;
    `
})
const T3 = styled.h2`
    font-weight:normal;
    width:100%;
    padding:0 .1rem;
    height:.23rem;
    display:flex;
    align-items:center;
    p{
        color:#ee2e52;
        font-size:.14rem;
        height:.2rem;
        margin-right:.04rem;
    }
    del{
        color:#999;
        font-size:.12rem;
        height:.16rem;
        margin-right:.04rem;
        text-decoration:line-through;
    }
    position: relative; 
    i{
        width:.36rem;
        height:.36rem;
        position:absolute;
        bottom:0;
        right:0;
        display:flex;
        justify-content:center;
        align-items:flex-end;
        img{
            width:70%;
            height:70%;
        }
    }
`

export{
    HomeScroll,
    HomeContainer,
    SwiperContainer,
    // Fixed,
    IndexNav,
    IndexNavwrap,
    IndexItem,
    MainContainerA,
    MainContainerB,
    BAd,
    BContent,
    Btitle,
    Bgoods,
    BgoodsItem,
    T1,
    T2,
    T3, 
    Loadcontainer,
    Adpic,
    Navpic,
    NavpicItem,
    Threepic,
    SwiperMidContainer,
    Timecon,
    SwiperLastContainer,
    Lastbox,
    Leftbox,
    Rightbox,
    TopContainer,
    TopWrap,
    BestGood,
    TalkGood,
    TalkWrap,
    EndTimecon
}