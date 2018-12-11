import React, { Component } from 'react';
import {
    Timecon
}from "../../pages/indexHome/styledComponent"
class NoTimeContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        }
    }
    render() {
        // console.log(this.props.time)
        return (
            <Timecon>
                <h2>
                    <span>仅剩</span>
                    <span>{this.state.day}天 {this.state.hour}时:{this.state.minute}分:{this.state.second}秒</span>
                </h2>
            </Timecon>
        )
    }

    componentDidMount() {
        // console.log(this.props.time)
        const end = Date.parse(new Date(this.props.time))
        this.countFun(end);
    }

    //卸载组件取消倒计时
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    countFun = (end) => {

        let now_time = Date.parse(new Date());
        var remaining = end - now_time;
        this.timer = setInterval(() => {
            //防止出现负数
            if (remaining > 1000) {
                remaining -= 1000;
                let day = Math.floor((remaining / 1000 / 3600) / 24);
                let hour = Math.floor((remaining / 1000 / 3600) % 24);
                let minute = Math.floor((remaining / 1000 / 60) % 60);
                let second = Math.floor(remaining / 1000 % 60);

                this.setState({
                    day: day,
                    hour: hour < 10 ? "0" + hour : hour,
                    minute: minute < 10 ? "0" + minute : minute,
                    second: second < 10 ? "0" + second : second
                })
            } else {
                clearInterval(this.timer);
                //倒计时结束时触发父组件的方法
                //this.props.timeEnd();
            }
        }, 1000);
    }

}
export default NoTimeContent;