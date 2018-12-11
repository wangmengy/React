import React, { Component ,Fragment} from 'react';
// import ReactDOM from 'react-dom'
// import LazyLoad from 'react-lazyload'
import Lazy from '../../components/lazyload/Lazy'

import {
    HomeScroll,
    HomeContainer,
    SwiperContainer,
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
    SwiperLastContainer,
    TopContainer,
    TopWrap,
    BestGood,
    TalkGood,
    TalkWrap
} from './styledComponent.js'
import SwiperMid from './swiperMid'
import SwiperTop from './swiperTop'
import SwiperLast from './swiperLast'
import BScroll from "better-scroll"
import Loading from 'components/common/loading'
import AC from '../../assets/images/addcar.png'
// import P1 from '../../assets/images/p1.jpg'
// import P2 from '../../assets/images/p2.jpg'
// import P3 from '../../assets/images/p3.jpg'
// import P4 from '../../assets/images/p4.jpg'
// import P5 from '../../assets/images/p5.jpg'
// import P6 from '../../assets/images/p6.jpg'
// import P7 from '../../assets/images/p7.jpg'
// import ImageLayout from 'react-image-layout';
// import Masonry from 'react-masonry-component';
import {
    CSSTransition
} from "react-transition-group"
// import Animates from 'components/Fade/fade.js'

import {connect} from 'react-redux'
import { getCount} from "../cart/actionCreater"
const mapState = (state)=>{
    return{
        cartList: state.getIn(["cart", "cartData"])
    }
    
}
const mapDispatch = (dispatch)=>{
    return{
        homeGetCount(goods){
            dispatch(getCount(goods))
        }
    }
}
class indexHomeContainer extends Component {
    constructor(){
        super()
        this.state={
            currentIndex: 0,
            indexnavlist:[],
            dis:true,
            BImg: [
                "http://pic10.cdn.3songshu.com:81//assets/upload/adv/199b81727a1d2f11cba23b46158288e5.jpg",
                "http://pic10.cdn.3songshu.com:81//assets/upload/adv/25721d35d435fc0c2b5b00e483072c36.jpg",
                "http://pic10.cdn.3songshu.com:81//assets/upload/adv/d5a352bd60454a811c21fd0e23c14d21.jpg",
                "http://pic10.cdn.3songshu.com:81//assets/upload/adv/ebff208b318ab7f30909773472feb934.jpg",
                "http://pic10.cdn.3songshu.com:81//assets/upload/adv/081e910dc9ae80e220af66095b2a3b56.jpg",
                "http://pic10.cdn.3songshu.com:81//assets/upload/adv/bdd9f65c479d9cec3972e84b8ed374ca.jpg",
                "http://pic10.cdn.3songshu.com:81//assets/upload/adv/16f84c9656a11ec16d85d65ee3faa64a.jpg"],
            tipId:0,
            Img:'',
            Bgoods:[],
            first:0,
            isloading: true,
            isCss:true,
            recommendChannel:{},
            talklist:[]
        }
    }
    render() {
        // console.log(this.props.cartList)
        return (
            <HomeScroll ref={el => {
                this.indexHomeScroll = el
                }}>
                <HomeContainer>
                    <SwiperContainer ref={el => {
                        this.SwiperContainer = el
                    }}>
                        <SwiperTop></SwiperTop>
                    </SwiperContainer>
                    <IndexNavwrap ref={el=>{
                        this.indexNavScroll=el
                    }}
                    >
                        <IndexNav>
                            {
                                this.state.indexnavlist.map((v,i)=>{
                                    return(
                                        <IndexItem
                                        key={v.id}
                                        onTouchStart={(e)=>this.handleclick(v,i,e)}
                                        active={this.state.currentIndex===i}
                                        >
                                        <span>{v.name}</span>
                                        <img src={v.pic} alt=""/>
                                        </IndexItem>
                                    )
                                })
                            }
                        </IndexNav>
                        
                    </IndexNavwrap>

                    <Loadcontainer isloading={this.state.isloading}>
                        <Loading></Loading>
                    </Loadcontainer>
                    <MainContainerA dis={this.state.dis}>
                        {
                            this.state.recommendChannel.topAdvs && this.state.recommendChannel.topAdvs.map((v,i)=>{
                                return (
                                    <Adpic
                                    key={i}>
                                        <img src={v.pic} alt="" />
                                    </Adpic>
                                )
                            })
                        }
                        <Navpic>
                            {
                                this.state.recommendChannel.middleAdvs && this.state.recommendChannel.middleAdvs.map((v, i) => {
                                    return (
                                        <NavpicItem
                                        key={i}>
                                            <img src={v.pic} alt="" />
                                        </NavpicItem>
                                    )
                                })
                            }
                        </Navpic>
                        
                        <Threepic>
                            {
                                this.state.recommendChannel.recommendAdvs && this.state.recommendChannel.recommendAdvs.map((v, i) => {
                                    return (
                                        <li
                                        key={i}>
                                            <Lazy className="pic" src={v.pic} />
                                        </li>
                                    )
                                })
                            }
                            
                        </Threepic>
                        <SwiperMidContainer>
                            <Btitle>
                                <span></span>
                                {this.state.recommendChannel.recommendActivitys && this.state.recommendChannel.recommendActivitys.title}
                            </Btitle>
                            <SwiperMid items={this.state.recommendChannel && this.state.recommendChannel.recommendActivitys}></SwiperMid>
                        </SwiperMidContainer>
                        <SwiperLastContainer>
                            <SwiperLast last={this.state.recommendChannel && this.state.recommendChannel.flashSale} >
                            </SwiperLast>
                        </SwiperLastContainer>
                        <TopContainer>
                            <Btitle>
                                <span></span>
                                本周卖得最好的10款零食
                            </Btitle>
                            {
                                this.state.recommendChannel.promotions && this.state.recommendChannel.promotions.map((val,idx)=>{
                                    return (
                                        <TopWrap
                                        key={idx}>
                                            <img src={val.pic} alt="" />
                                        </TopWrap>
                                    )
                                })
                            }
                        </TopContainer>
                        <BestGood>
                            <Btitle>
                                <span></span>
                                {this.state.recommendChannel.floors&&this.state.recommendChannel.floors[0].title}
                            </Btitle>
                        <Bgoods>
                        {
                            this.state.recommendChannel.floors&&this.state.recommendChannel.floors[0].products.map((v,k)=>{
                                return(
                                    <BgoodsItem
                                        key={Math.random()}
                                    >
                                        <div>
                                            <Lazy className="pic" src={v.pic} />
                                            <img src={v.tags[0] ? v.tags[0].pic : ""} alt="" />
                                        </div>
                                        <T1>{v.alias}</T1>
                                        <T2>{v.name}</T2>
                                        <T3>
                                            <p>{v.marketPrice}.0</p>
                                            <del>{v.salesPrice}</del>
                                            <i onClick={() => {
                                                // console.log(v.productId)
                                                this.getMount(v.productId)
                                            }}>
                                                <img src={AC} alt="" />
                                            </i>
                                        </T3>
                                    </BgoodsItem>
                                )
                            })
                        }
                              
                        </Bgoods>
                        </BestGood>
                        <TalkGood>
                            <Btitle>
                                <span></span>
                                {this.state.recommendChannel.floors && this.state.recommendChannel.floors[0].title}
                            </Btitle>
                            <Bgoods>
                            {
                                    this.state.talklist && this.state.talklist.map((v,i)=>{
                                        return(
                                            <BgoodsItem
                                                key={Math.random()}
                                            >
                                                <div>
                                                    <Lazy className="pic" src={v.pic} />
                                                    <img src={v.tags[0] ? v.tags[0].pic : ""} alt="" />
                                                </div>
                                                <T1>{v.alias}</T1>
                                                <T2>{v.name}</T2>
                                                <T3>
                                                    <p>{v.marketPrice}.0</p>
                                                    <del>{v.salesPrice}</del>
                                                    <i onClick={() => {
                                                        // console.log(v.productId)
                                                        this.getMount(v.productId)
                                                    }}>
                                                        <img src={AC} alt="" />
                                                    </i>
                                                </T3>

                                                <TalkWrap>
                                                    <span>大家说：</span>{v.remarks}
                                                </TalkWrap>
                                            </BgoodsItem>
                                        )
                                    })
                            }
                            </Bgoods>
                        </TalkGood>
                    </MainContainerA>
                
                    <CSSTransition
                        in={!!this.state.isloading}
                        classNames={{
                            enter: 'animated',
                            enterActive: this.state.isloading ? 'fadeIn' : 'fadeOut',
                            exit: 'animated',
                            exitActive: !this.state.isloading ? 'fadeOut' : 'fadeIn',
                        }}
                        timeout={300}
                        mountOnEnter={true}
                        unmountOnExit={true}
                    >
                    <MainContainerB dis={this.state.dis}>
                        <BAd>
                            <img src={this.state.Img} alt=""/>
                        </BAd>
                        <BContent>
                        {
                            this.state.Bgoods.map((val,i)=>{
                                return(
                                    <Fragment
                                        key={Math.random()}>
                                        <Btitle
                                            key={i}
                                        >
                                            <span></span>
                                            {val.title}
                                        </Btitle>
                                        <Bgoods>
                                            {
                                                val.products.map((v)=>{
                                                   return(
                                                        <BgoodsItem
                                                           key={Math.random()}
                                                        >
                                                            <div>
                                                               <Lazy className="pic" src={v.pic}/>
                                                                <img src={v.tags[0] ? v.tags[0].pic:""} alt="" />
                                                            </div>
                                                           <T1>{v.alias}</T1>
                                                            <T2>{v.name}</T2>
                                                            <T3>
                                                               <p>{v.marketPrice}.0</p>
                                                               <del>{v.salesPrice}</del>
                                                               <i onClick={() => {
                                                                   // console.log(v.productId)
                                                                   this.getMount(v.productId)
                                                               }}>
                                                                   <img src={AC} alt="" />
                                                               </i>
                                                            </T3>
                                                        </BgoodsItem>
                                                   )

                                                })
                                            }
                                        </Bgoods>
                                    </Fragment>
                                   
                                )
                            })
                        }
                           
                        </BContent>
                    </MainContainerB>
                    </CSSTransition>
                </HomeContainer>
            </HomeScroll>
        );
    }
    componentDidMount(){
        fetch('/api/index/info?param=%7B%22type%22%3A%22mobile%22%7D',{
            method:'get',
            headers:{
                "appKey": 'ef1fc57c13007e33',
                "appVersion": "3.9.0",
                
            }
        })
        .then(res=>{
            return res.json()
        })
        .then(result=>{
            // console.log(result.data)
            this.setState({
                indexnavlist: result.data && result.data.channels,
                recommendChannel: result.data && result.data.recommendChannel,
            })
        })
        fetch('/api/index/recommendList/1', {
            method: 'get',
            headers: {
                "appKey": 'ef1fc57c13007e33',
                "appVersion": "3.9.0",
                
            }
        })
            .then(res => {
                return res.json()
            })
            .then(result => {
                // console.log(result.data)
                this.setState({
                    talklist: result&&result.data && result.data.items
                })
            })
            
            

        this.IndexNavScroll = new BScroll(this.indexNavScroll,
            {
                scrollX:true,
                click:true,
                scrollY:false
            })
        this.IndexScroll = new BScroll(this.indexHomeScroll, {
            probeType:1,
            click: true,
            // pullUpLoad:{
            //     threshold:50
            // }
            // bounce:false,
        })
        // this.IndexScroll.on("pullingUp",()=>{
        //     console.log("0")
        //     this.setState({
        //         // page:this.state.page+1
        //     })
        // })
        this.IndexScroll.on("scroll",()=>{
            //获取ref的元素高度
            let eH=parseFloat(window.getComputedStyle(this.SwiperContainer).height)
            let sH = -this.IndexScroll.y
            // console.log(sH,eH)
            if (sH>=eH){
                this.setState({
                    fixTop: sH

                })
            }else{
                this.setState({
                    fixTop:eH
                })
            }
        })

    }
    handleclick(v,i,e){
        // console.log(this.state.currentIndex === 0)
        // console.log(i)
        this.setState({
            currentIndex:i,
            dis: i === 0,
            tipId:v.id,
        })
        this.goMid(e)
        // console.log(v.id)
        // if(i===0){
        //     this.setState({
        //         isloading: !!this.state.isloading
        //     })
        // }
        // if(i===0){
        //     this.setState({
        //         isloading: !!this.state.isloading,
        //     })
        // }
        if(i!==0){
            this.setState({
                isloading: !!!this.state.isloading
            })
            let url = "/api/index/channelInfo?param=%7B%22id%22%3A" + v.id + "%2C%22type%22%3A%22mobile%22%7D"
            // console.log(url)
            fetch(url, {
                method: 'get',
                headers: {
                    "appKey": 'ef1fc57c13007e33',
                    "appVersion": "3.9.0"
                }
            })
                .then(res => {
                    return res.json()
                })
                .then(result => {
                    // console.log(result.data.floors)
                    this.setState({
                        Bgoods: result.data && result.data.floors,
                        isloading: !!!this.state.isloading,
                        Img: this.getimg(i),
                    })
                })
        }
        
    }
    goMid(e){
        let clientX = e.touches[0].clientX
        let isLeftok=clientX<100
        let isRightok = clientX-window.innerWidth>-100
        // console.log(clientX)
        // console.log(window.innerWidth)
        if(isLeftok){
            this.IndexNavScroll.scrollBy(window.innerWidth/2, 0, 300)
            this.IndexNavScroll.refresh()//解决回弹问题
            // console.log(1)
        }
        if (isRightok) {
            this.IndexNavScroll.scrollBy(-window.innerWidth / 2, 0, 300)
            this.IndexNavScroll.refresh()//解决回弹问题
            // console.log(0)
        }
    }
    getimg(i){
        return this.state.BImg[i-1]
    }
    getMount(id){
        var count = 1
        var goods={id:id,count:count}

        this.props.homeGetCount(goods)
    }
}

export default connect(mapState,mapDispatch)(indexHomeContainer);