import React, { Component } from 'react';

import {
    CartCont,
    CartWrap,
    Ctitle,
    Ctips,
    ListWrap,
    List,
    ListItem,
    BottomWrap,
    BottomToBuy,
    BottomToDel,
    BottomBuy,
    BottomDetail
} from './styledComponent'
import P1 from '../../assets/images/back.png'
import P2 from '../../assets/images/警告.png'
import P3 from '../../assets/images/支付选择 (1).png'
import P4 from '../../assets/images/支付选择.png'
class CartContainer extends Component {
    constructor(){
        super()
        this.state={
            checked:true,
        }
    }
    render() {
        return (
            <CartCont>
                <CartWrap>
                    <Ctitle>
                        <i>
                            <img src={P1} alt=""/>
                        </i>
                        购物车
                        <span>
                            编辑
                        </span>
                    </Ctitle>
                    <Ctips>
                        <p>
                            满39免运费<span>，还差<b>17.10</b>元</span>
                        </p>
                        <div>
                            去清单
                            <i>
                                <img src={P2} alt=""/>
                            </i>
                        </div>
                    </Ctips>
                </CartWrap> 
                <ListWrap>
                    <List>
                        <ListItem>
                            <span>
                                <img src={this.state.checked?P4:P3} alt=""/>
                            </span>
                            <div>
                                <div class="Img">
                                    <img src="http://pic10.cdn.3songshu.com:81//assets/upload/product/7df14f676f4d4df5ba0554f24f2c2d54_200x200.jpg" alt=""/>
                                
                                </div>
                                <ul>  
                                    <li>开口松子原味 218g<span>原味</span></li>
                                    <li><p>28.0</p></li>
                                    <li>
                                        <div>
                                            <b>-</b>
                                            <input type="text" value="2"/>
                                            <b>+</b>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ListItem>
                        <ListItem>
                            <span>
                                <img src={this.state.checked?P4:P3} alt=""/>
                            </span>
                            <div>
                                <div class="Img">
                                    <img src="http://pic10.cdn.3songshu.com:81//assets/upload/product/7df14f676f4d4df5ba0554f24f2c2d54_200x200.jpg" alt=""/>
                                
                                </div>
                                <ul>  
                                    <li>开口松子原味 218g<span>原味</span></li>
                                    <li><p>28.0</p></li>
                                    <li>
                                        <div>
                                            <b>-</b>
                                            <input type="text" value="2"/>
                                            <b>+</b>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ListItem>
                        <ListItem>
                            <span>
                                <img src={this.state.checked ? P4 : P3} alt="" />
                            </span>
                            <div>
                                <div class="Img">
                                    <img src="http://pic10.cdn.3songshu.com:81//assets/upload/product/7df14f676f4d4df5ba0554f24f2c2d54_200x200.jpg" alt="" />

                                </div>
                                <ul>
                                    <li>开口松子原味 218g<span>原味</span></li>
                                    <li><p>28.0</p></li>
                                    <li>
                                        <div>
                                            <b>-</b>
                                            <input type="text" value="2" />
                                            <b>+</b>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ListItem>
                        <ListItem>
                            <span>
                                <img src={this.state.checked ? P4 : P3} alt="" />
                            </span>
                            <div>
                                <div class="Img">
                                    <img src="http://pic10.cdn.3songshu.com:81//assets/upload/product/7df14f676f4d4df5ba0554f24f2c2d54_200x200.jpg" alt="" />

                                </div>
                                <ul>
                                    <li>开口松子原味 218g<span>原味</span></li>
                                    <li><p>28.0</p></li>
                                    <li>
                                        <div>
                                            <b>-</b>
                                            <input type="text" value="2" />
                                            <b>+</b>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ListItem>
                        <ListItem>
                            <span>
                                <img src={this.state.checked ? P4 : P3} alt="" />
                            </span>
                            <div>
                                <div class="Img">
                                    <img src="http://pic10.cdn.3songshu.com:81//assets/upload/product/7df14f676f4d4df5ba0554f24f2c2d54_200x200.jpg" alt="" />

                                </div>
                                <ul>
                                    <li>开口松子原味 218g<span>原味</span></li>
                                    <li><p>28.0</p></li>
                                    <li>
                                        <div>
                                            <b>-</b>
                                            <input type="text" value="2" />
                                            <b>+</b>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ListItem>
                        <ListItem>
                            <span>
                                <img src={this.state.checked ? P4 : P3} alt="" />
                            </span>
                            <div>
                                <div class="Img">
                                    <img src="http://pic10.cdn.3songshu.com:81//assets/upload/product/7df14f676f4d4df5ba0554f24f2c2d54_200x200.jpg" alt="" />

                                </div>
                                <ul>
                                    <li>开口松子原味 218g<span>原味</span></li>
                                    <li><p>28.0</p></li>
                                    <li>
                                        <div>
                                            <b>-</b>
                                            <input type="text" value="2" />
                                            <b>+</b>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ListItem>
                        <ListItem>
                            <span>
                                <img src={this.state.checked ? P4 : P3} alt="" />
                            </span>
                            <div>
                                <div class="Img">
                                    <img src="http://pic10.cdn.3songshu.com:81//assets/upload/product/7df14f676f4d4df5ba0554f24f2c2d54_200x200.jpg" alt="" />

                                </div>
                                <ul>
                                    <li>开口松子原味 218g<span>原味</span></li>
                                    <li><p>28.0</p></li>
                                    <li>
                                        <div>
                                            <b>-</b>
                                            <input type="text" value="2" />
                                            <b>+</b>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ListItem>
                    </List>
                </ListWrap>  
                <BottomWrap>
                    <div class="check">
                        <span>
                            <img src={this.state.checked ? P4 : P3} alt="" />
                        </span>
                        全选
                    </div>
                    <BottomToBuy>
                        <BottomDetail>
                            <li>
                                应付：<span>149.40</span>
                            </li>
                            <li>
                                总价：<span>222.22</span> 优惠：<span>22.2</span>
                            </li>
                        </BottomDetail>
                        <BottomBuy>
                            去结算
                            <span>(0)</span>
                        </BottomBuy>
                    </BottomToBuy>
                    <BottomToDel>
                        <span>
                            删除
                        </span>
                    </BottomToDel>
                </BottomWrap> 
            </CartCont>
        );
    }
}

export default CartContainer;