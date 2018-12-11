import styled from 'styled-components'

import border from 'components/styled/border'
import FDJpng from '../../assets/images/fdj.png'
import single from '../../assets/images/左三角.png'

const WhichWrapper =styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    background:#fff;
    overflow:hidden;
    >div:nth-child(2){
        position:relative;
        flex:1;
    }
`
const Loadcontainer = styled.div`
    width:100%;
    height:100%;
    display:${props => props.dis ? "none" : "block"};
`
//头部分类和热门
const WhichHeader = border({
    component: styled.header`
    height:.44rem;
    background:#fff;
    display: flex;
    justify-content:center;
    align-items:center;
`   ,
    width:'0 0 1px 0',
    color: "#77bc1f",

})


const WhichNav =border({
    component: styled.nav`
    width:1.44rem;
    height:.3rem;
    display:flex;
    position: relative;
    /* background:#cee; */
`,
    color:'#77bc1f',
    radius:15
})

const FDJ = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:100%;
    width:.45rem;
    display:flex;
    justify-content:center;
    align-items:center;
    div{
        width:.2rem;
        height:.2rem;
        background:url(${ FDJpng }) center center / 18px 18px no-repeat;
    }
`

const WhichNavItem = styled.div`
    flex:1;
    height:100%;
    width:50%;
    text-align:center;
    line-height:.3rem;
    position:absolute;
    z-index:1;
    color:${props => props.active ? '#77bc1f' :'#000'};
    left:${props => props.pos !== 'right' ? 0 : ''};
    right:${props => props.pos ==='right' ? 0 : ''};
`

const WhichSlider = styled.div`
    position:absolute;
    border-radius:.15rem;
    background:#cee;
    left:${props=>props.dir==="left"?0:'50%'};
    top:0;
    width:50%;
    height:100%;
    z-index:0;
    transition:all .3s;
`
//中间content内容list 1
const FenleiWrap = styled.div`
    width:100%;
    flex:1;
    display:flex;
    position:absolute!important;
    height:100%;
    overflow:hidden;
    >div:nth-child(1){
        width:.8rem;
        height:100%;
    }
    >div:nth-child(2){
        width:100%;
        height:100%;
    }
`

const FenleiNav = styled.ul`
    display:flex;
    flex-direction:column;
    width:.8rem;
    overflow:hidden;

`
const FenleiNavItem =border({
    component:styled.li`
    height:.8rem;
    font-size: .16rem;
    display:flex;
    justify-content:center;
    align-items:center; 
    background:${props => props.active ? '#77bc1f' : '#f9f9f9'};
    color:${props => props.active ? '#fff' : '#262626'};
    position:relative;
    width: 100%;
    span{
        width:2em;
        line-height:.18rem;
        text-align:center;
    }
    p{
        background:url(${single});
        /* background:#cc3; */
        position:absolute;
        width:.2rem;
        height:.2rem;
        right:-.06rem;
        top:.3rem;
        display:${props=>props.active?'block':'none'}
    }
`   ,
    width: '0 0 1px 0',
    color: "#77bc1f",
})
//align-content:flex-start; 换行顶满
const FenleiContent = styled.ul`
    padding-right:.1rem;
    display:flex;
    flex-wrap:wrap;
    align-content:flex-start;
`
const FenleiContentItem = styled.li`
    width:33.3%;
    height:1.31rem;
    display:flex;
    flex-direction:column;
    span{
        background:#fff;
        display:flex;
        flex:1;
        justify-content: center;
        align-items:center;
        font-size:.14rem;
    }
`
const Img = styled.div`
    width:100%;
    padding-bottom:100%;
    font-size:0;
    position:relative;
    img{
        position:absolute;
        width:100%;
        height:100%;
    }
`


const FoundWrap = styled.div`
    width:100%;
    height: 100%;
    flex:1;
    position:absolute!important;
`
const FoundContainer = styled.ul`
    width:100%;
    height: 100%;
    display:flex;
    flex-wrap:wrap;
    align-content:flex-start;
    overflow:hidden;
`
const FoundItem = styled.li`
    width:50%;
    padding-bottom:37%;
    font-size:0;
    position:relative;
    img{
        position:absolute;
        width:100%;
        height:100%;
    }
`
export {
    WhichWrapper,
    WhichHeader,
    WhichNav,
    WhichNavItem,
    WhichSlider,
    FenleiWrap,
    FoundWrap,
    FDJ,
    FenleiNav,
    FenleiNavItem,
    FenleiContent,
    FenleiContentItem,
    Img,
    Loadcontainer,
    FoundContainer,
    FoundItem,
}