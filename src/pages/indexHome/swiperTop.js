import React, { Component } from 'react';

import B1 from '../../assets/images/b1.jpg'
import B2 from '../../assets/images/b2.jpg'
import { Carousel} from "antd-mobile"
class swiperTop extends Component {
    render() {
        return (
                <Carousel
                    autoplay={true}
                    infinite
                >
                        <img
                            src={`${B1}`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                        <img
                            src={`${B2}`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                </Carousel>
        );
    }
}

export default swiperTop;