import React, { Component } from 'react';
import {
    Lastbox,
    Leftbox,
    Rightbox,
    T1,
    T3
}from "./styledComponent"
import EndTime from '../../components/endtime/EndTime'
import { Carousel } from "antd-mobile"
import R1 from '../../assets/images/icon2.png'
import R2 from '../../assets/images/icon3.png'
import AC from '../../assets/images/addcar.png'
class swiperLast extends Component {
    render() {
        // console.log(this.props.last)
        return (
            <Lastbox>
                <Leftbox>
                    <img src={R1} alt=""/>
                    <p>
                        <img src={R2} alt=""/>
                        <span>秒杀</span>
                    </p>
                    <b>距离秒杀结束</b>
                    <EndTime time={this.props.last && this.props.last.endTime}></EndTime>
                </Leftbox>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {
                        this.props.last && this.props.last.products.map((val,index)=>{
                            return(
                                < Rightbox 
                                key={
                                    index
                                }>
                                    <div>
                                        <img src={val.pic} alt="" />
                                    </div>
                                    <T1>{val.name}</T1>
                                    <T3>
                                        <p>{val.marketPrice}.0</p>
                                        <del>{val.salesPrice}</del>
                                    </T3>
                                    <i>
                                        <img src={AC} alt="" />
                                    </i>
                                </Rightbox >

                            )
                        })
                    }
                </Carousel>
            </Lastbox>
        );
    }
}

export default swiperLast;