import React, { Component } from 'react';
import Lazyload from 'r-img-lazyload';

const pic = require('../../assets/images/timg2.gif');

export default class extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
    }
    render() {
        const config = {
            options: {
                error: pic,
                loading: pic
            },
            ...this.props
        };
        return <Lazyload {...config} />;
    }
}