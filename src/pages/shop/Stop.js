import React, { Component } from 'react';
import {
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
    ShopImgTit
}from "./styledComponent"
import P1 from "../../assets/images/shop_1.png"
import P2 from "../../assets/images/shop_2.png"
import P3 from "../../assets/images/shop_3.jpg"
import P4 from '../../assets/images/icon-integral@2x.ba5969d3.png'

import Lazy from '../../components/lazyload/Lazy'
class Stop extends Component {
    render() {
        console.log(this.props.Shopcont.floors && this.props.Shopcont.floors[0])
        return (
            <StopWrap>
                <UserCont>
                    <First>我的松鼠币</First>
                    <Second>80</Second>
                    <Third>连续签到1天 主人明天再来试试运气</Third>
                    <Forth>赚松鼠币</Forth>
                    <Tips>已签到</Tips>
                </UserCont>
                <Stwo>
                    <li>
                        <img src={P2} alt=""/>
                        <span>
                            <h3>购物袋</h3>
                            <h4>想要的都在这</h4>
                        </span>
                    </li>
                    <li>
                        <img src={P1} alt=""/>
                        <span>
                            <h3>我的兑换</h3>
                            <h4>查看松鼠币兑换订单</h4>
                        </span>
                    </li>
                </Stwo>
                <SAd>
                    <img src={P3} alt=""/>
                </SAd>
                <Shoptitle>
                    <span></span>
                    {this.props.Shopcont.floors && this.props.Shopcont.floors[0].floorHead.name}
                </Shoptitle>
                <ShopCon>
                {
                        this.props.Shopcont.floors && this.props.Shopcont.floors[0].products.map((val)=>{
                            return(
                                <ShopItem
                                key={val.id}>
                                    <Lazy className="pic" src={val.pic} />
                                    <h4>{val.name}</h4>
                                    <h5>每人限兑{val.limit}件</h5>
                                    <h3>
                                        <img src={P4} alt="" />
                                        {val.integralAmout}
                                     </h3>
                                </ShopItem>
                            )
                        })
                }
                    
                </ShopCon>
                <ShopCon>
                    <ShopImgTit>
                        <img src={this.props.Shopcont.floors ? this.props.Shopcont.floors[1].floorHead.pic:''} alt=""/>
                    </ShopImgTit>
                    {
                        this.props.Shopcont.floors && this.props.Shopcont.floors[1].products.map((val) => {
                            return (
                                <ShopItem
                                    key={val.id}>
                                    <Lazy className="pic" src={val.pic} />
                                    <h4>{val.name}</h4>
                                    <h5>数量有限，兑完为止</h5>
                                    <h3>
                                        <img src={P4} alt="" />
                                        {val.integralAmout}
                                    </h3>
                                </ShopItem>
                            )
                        })
                    }
                    
                </ShopCon>
            </StopWrap>
        );
    }
}

export default Stop;