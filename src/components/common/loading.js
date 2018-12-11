import React, { Component } from 'react';
import Loadwrap from './loadstyled'
import load from '../../assets/images/timg.gif'
class loading extends Component {
    render() {
        return (
            <Loadwrap>
                <div>
                    <img src={load} alt=""/>
                    <span>
                        请稍等...
                    </span>
                </div>
            </Loadwrap>
        );
    }
}

export default loading;