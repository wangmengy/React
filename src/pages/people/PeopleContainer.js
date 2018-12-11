import React, { Component } from 'react';
import{
    PeopleCont,
    Banner,
    List,
    Tips
}from './styledComponent'
import P1 from '../../assets/images/user-ad.jpg'
import P2 from '../../assets/images/icon-nut-white@2x.844b41a5.png'
import P3 from '../../assets/images/选择 (1).png'
import P4 from '../../assets/images/订单.png'
import P5 from '../../assets/images/优惠券.png'
import P6 from '../../assets/images/邀请有奖.png'
import P7 from '../../assets/images/在线客服.png'
import P8 from '../../assets/images/帮助反馈.png'
import P9 from '../../assets/images/设置.png'
import P10 from '../../assets/images/待付款.png'
import P11 from '../../assets/images/待发货.png'
import P12 from '../../assets/images/待收货.png'
import P13 from '../../assets/images/待评价.png'
import P14 from '../../assets/images/退款.png'
class PeopleContainer extends Component {
    render() {
        return (
            <PeopleCont>
                <Banner>
                    <img src={P1} alt=""/>
                    <img src="http://pic10.cdn.3songshu.com:81//assets/upload/avatar/55119bf24dd1810130407b5c63119ac9.jpg" alt=""/>
                    <span>123****8901</span>
                    <span>账户管理 收货地址&gt;</span>
                    <ul>
                        <li>
                            <p>0</p>
                            <p>我的收藏夹</p>
                        </li>
                        <li>
                            <p>
                                <img src={P2} alt=""/>
                                267
                            </p>
                            <p>我的松鼠币</p>
                        </li>
                    </ul>
                </Banner>
                <List>
                    <li>
                        <i>
                            <img src={P4} alt=""/>
                        </i>
                        <div>
                            <span>我的订单</span>
                            <span>查看全部订单</span>
                        </div>
                        <i>
                            <img src={P3} alt="" />
                        </i>
                    </li>
                </List>
                <Tips>
                    <li>
                        <i>
                            <img src={P10} alt=""/>
                        </i>
                        <span>待付款</span>
                    </li>
                    <li>
                        <i>
                            <img src={P11} alt="" />
                        </i>
                        <span>待发货</span>
                    </li>
                    <li>
                        <i>
                            <img src={P12} alt="" />
                        </i>
                        <span>待收货</span>
                    </li>
                    <li>
                        <i>
                            <img src={P13} alt="" />
                        </i>
                        <span>待评价</span>
                    </li>
                    <li>
                        <i>
                            <img src={P14} alt="" />
                        </i>
                        <span>退款/售后</span>
                    </li>
                </Tips>
                <List>
                    <li>
                        <i>
                            <img src={P5} alt="" />
                        </i>
                        <div>
                            <span>我的优惠券</span>
                            <span>7张</span>
                        </div>
                        <i>
                            <img src={P3} alt="" />
                        </i>
                    </li>
                    <li>
                        <i>
                            <img src={P6} alt="" />
                        </i>
                        <div>
                            <span>推荐有奖</span>
                            <span></span>
                        </div>
                        <i>
                            <img src={P3} alt="" />
                        </i>
                    </li>
                    <li>
                        <i>
                            <img src={P7} alt="" />
                        </i>
                        <div>
                            <span>在线客服</span>
                            <span></span>
                        </div>
                        <i>
                            <img src={P3} alt="" />
                        </i>
                    </li>
                    <li>
                        <i>
                            <img src={P8} alt="" />
                        </i>
                        <div>
                            <span>帮助与反馈</span>
                            <span></span>
                        </div>
                        <i>
                            <img src={P3} alt="" />
                        </i>
                    </li>
                    <li>
                        <i>
                            <img src={P9} alt="" />
                        </i>
                        <div>
                            <span>设置</span>
                            <span>关于我们</span>
                        </div>
                        <i>
                            <img src={P3} alt="" />
                        </i>
                    </li>
                </List>
            </PeopleCont>
        );
    }
}

export default PeopleContainer;