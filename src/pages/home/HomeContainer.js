import React, { Component } from 'react';

import { TabBar} from 'antd-mobile'

import { Indexhome } from "../indexHome"
import { WhichContainer } from "../which"
import { ShopContainer } from "../shop"
import { CartContainer } from "../cart"
import { PeopleContainer } from "../people"


import home1 from 'images/home1.png'
import home2 from 'images/home2.png'
import which1 from 'images/which1.png'
import which2 from 'images/which2.png'
import shop1 from 'images/shop1.png'
import shop2 from 'images/shop2.png'
import people1 from 'images/people1.png'
import people2 from 'images/people2.png'
import car1 from 'images/car1.png'
import car2 from 'images/car2.png'
import { connect } from 'react-redux'
const mapState = (state) => {
    return {
        cartList: state.getIn(["cart", "cartData"])
    }

}


class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            fullScreen:true,
            num:0,
        };
    }
    render() {
        console.log(this.state.num)
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#585858"//未被选中颜色
                    tintColor="#77bc1f"//选中颜色
                    barTintColor="white"//背景色
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${home2}) center center /  20px 20px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${home1}) center center /  20px 20px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'home',
                            });
                        }}
                    >
                        <Indexhome></Indexhome>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${which2}) center center /  20px 20px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${which1}) center center /  20px 20px no-repeat`
                        }}
                        />
                        }
                        title="分类"
                        key="which"
                        selected={this.state.selectedTab === 'which'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'which',
                            });
                        }}
                    >
                            <WhichContainer></WhichContainer>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${shop2}) center center /  20px 20px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${shop1}) center center /  20px 20px no-repeat`
                        }}
                        />
                        }
                        title="松鼠币商城"
                        key="shop"
                        selected={this.state.selectedTab === 'shop'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'shop',
                            });
                        }}
                    >
                        <ShopContainer></ShopContainer>
                    </TabBar.Item>
                    
                    
                    <TabBar.Item
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${car2}) center center /  22px 22px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${car1}) center center /  22px 22px no-repeat`
                        }}
                        />
                        }
                        title="购物车"
                        key="car"
                        badge={this.state.num === 0 ? "" : this.state.num}
                        selected={this.state.selectedTab === 'car'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'car',
                            });
                        }}
                    >
                        <CartContainer></CartContainer>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${people2}) center center /  20px 20px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${people1}) center center /  20px 20px no-repeat`
                        }}
                        />
                        }
                        title="个人中心"
                        key="people"
                        selected={this.state.selectedTab === 'people'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'people',
                            });
                        }}
                    >
                        <PeopleContainer></PeopleContainer>
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.cartList)
        // console.log(nextProps.cartList.getIn(["count"]))
        nextProps.cartList.forEach((val)=>{
            // console.log(val.get("count"))
            this.setState({
                num: this.state.num+1
            })
        })
        
    }
}

export default connect(mapState)(HomeContainer);