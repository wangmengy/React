import React, { Component,Fragment} from 'react';

import {
    FenleiWrap,
    FenleiNav,
    FenleiNavItem,
    FenleiContent,
    FenleiContentItem,
    Img,
    Loadcontainer
} from './styledComponent'



import Animates from 'components/highorder/animates.js'
import BScroll from "better-scroll"

import Loading from 'components/common/loading'
class Fenlei extends Component {
    constructor(){
        super()
        this.state={
            fenleiList:[],
            fenleiContent:[],
            currentIndex:0,
            dis:false,
        }
    }
    render() {
        // console.log(this.state.dis)
        return (
            <Fragment>
                <FenleiWrap>
                    <div ref={el=>{
                        this.FenleiNavScroll=el
                    }}>
                        <FenleiNav>
                            {
                                this.state.fenleiList.map((v,i)=>{
                                    return(
                                        <FenleiNavItem 
                                            key={v.id}
                                            onTouchStart={(e)=>this.handleClick(v,i,e)}
                                            active={this.state.currentIndex===i}
                                        >
                                            <span>{v.name}</span>
                                            <p></p>
                                        </FenleiNavItem>
                                    )
                                })
                            }
                        </FenleiNav>
                    </div>
                    <div ref={el => {
                        this.FenleiContentScroll = el
                    }}>
                        <FenleiContent>
                            {
                                this.state.fenleiContent.map((val) => {
                                    return (
                                        <FenleiContentItem
                                            key={val.id}
                                        >
                                            <Img>
                                                <img src={val.activePic} alt="" />
                                            </Img>
                                            <span>{val.name}</span>
                                        </FenleiContentItem>
                                    )
                                })
                            }
                        </FenleiContent>
                    </div>
                </FenleiWrap>
                <Loadcontainer dis={this.state.dis}>
                    <Loading></Loading>
                </Loadcontainer>
            </Fragment>
        );
    }
    componentDidMount() {
        // console.log(this.state.dis)
        fetch('/api/navigation/listNew?param=%7B%22id%22%3A0%2C%22depth%22%3A0%2C%22type%22%3A1%7D',{
            method:'get',
            headers: {
                'appKey': 'ef1fc57c13007e33',
                "appVersion": "3.9.0"
            },
        })
        .then(response=>{
            return response.json()
        })
        .then(result=>{
            // console.log(result.data)
            this.setState({
                fenleiList:result.data||[],
                fenleiContent: result.data && result.data[0].subNavigations,
                dis:!!!this.state.dis
            })
        })
        // console.log(this.state.dis)
        this.FenleiScroll=new BScroll(this.FenleiNavScroll,{
            click:true,
            // bounce:false,
        })
        this.ContentScroll = new BScroll(this.FenleiContentScroll, {
            click: true,
            // bounce:false,
        })
    }
    handleClick(v,i,e){
        this.setState({
            currentIndex:i
        })
        this.getZero(e)
        //显示菜单
        // console.log(v.id)
        this.setState({
            fenleiContent:this.fillterContent(i)
        })
        // console.log(this.fillterContent(i))

        this.ContentScroll.scrollTo(0,0)
    }
    getZero(e){
        let clientY = e.touches[0].clientY
        let isTopok = clientY-44 < 120
        let isBottomok = clientY - 44 -(window.innerHeight - 94)> -120
        // console.log(isTopok)
        if(isTopok){
            this.FenleiScroll.scrollBy(0,200,300)
            this.FenleiScroll.refresh()//解决回弹问题
            // console.log("ok")
        }
        if(isBottomok){
            this.FenleiScroll.scrollBy(0, -200, 300)
            this.FenleiScroll.refresh()//解决回弹问题
        }
    }
    fillterContent(i){
        // console.log(this.state.fenleiList[i].subNavigations)
        return this.state.fenleiList[i].subNavigations
        
    }
}

export default Animates(Fenlei)