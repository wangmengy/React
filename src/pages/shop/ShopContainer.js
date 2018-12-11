import React, { Component } from 'react';

import {
    ShopWrap,
    Stitle,
    StopContainer,
    Loadcontainer
}from './styledComponent'
import Loading from 'components/common/loading'
import Stop from "./Stop"
import BScroll from "better-scroll"
class ShopContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            Shopcont:[],
            isloading:true,
            dis:true,
        }
    }
    render() {
        return (
            <ShopWrap>
                <Stitle>松鼠币商城</Stitle>
                <StopContainer ref={el => {
                    this.ShopScroll = el
                }}
                    dis={this.state.dis}>
                    <Stop Shopcont={this.state.Shopcont}></Stop>
                </StopContainer>

                <Loadcontainer isloading={this.state.isloading}>
                    <Loading></Loading>
                </Loadcontainer>
            </ShopWrap>
        );
    }

    componentDidMount(){
        this.setState({
            isloading: !!!this.state.isloading,
            dis:!!this.state.dis
        })
        fetch("http://m.3songshu.com/mobile/api/integral/index/info", {
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
                console.log(result)
                this.setState({
                    Shopcont: result&& result.data,
                    isloading: !!!this.state.isloading,
                    dis: !!!this.state.dis
                })
            })
            new BScroll(this.ShopScroll,{
                click:true,
                probeType:1,
            })
    }
}

export default ShopContainer;