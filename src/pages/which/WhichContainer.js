import React, { Component } from 'react';

import {
    WhichWrapper,
    WhichHeader,
    WhichNav,
    WhichNavItem,
    WhichSlider,
    FDJ,
} from './styledComponent.js'
import Fenlei from './fenlei'
import Found from './found'
import{
    Route,
    withRouter,
} from 'react-router-dom'


class WhichContainer extends Component {
    constructor(){
        super()
        this.state={
            dir:'left',
            activeDir:'left'
        }
    }
    render() {
        return (
            <WhichWrapper>
                <WhichHeader>
                    <WhichNav>
                        <WhichNavItem 
                        onClick={()=>{
                            this.handleChange('left')
                        }} 
                        active={this.state.activeDir==="left"}
                        >
                        分类
                        </WhichNavItem>
                        <WhichNavItem 
                        onClick={()=> {
                            this.handleChange('right')
                        }
                        } 
                        active={this.state.activeDir=== "right"}
                        pos="right"
                        >
                        发现
                        
                        </WhichNavItem>    
                        <WhichSlider dir={this.state.dir}></WhichSlider>
                    </WhichNav>
                    <FDJ>
                    <div>
                    </div>
                    </FDJ>
                </WhichHeader>
                    <div>
                        <Route path='/' exact children={props=><Fenlei{...props}/>} />
                        <Route path='/fenlei' children={props=><Fenlei{...props}/>} />
                        <Route path='/found' children={props=><Found{...props}/>} />
                    </div>

            </WhichWrapper>
        );
    }
    handleChange(dir){
        this.setState({
            dir:dir
        })
        setTimeout(()=>{
            this.setState({
                activeDir: dir
            })
        },200)
        this.props.history.push(
            dir==="left"?'Fenlei':'Found',
            {dir}
        )
    }
    
}

export default withRouter(WhichContainer);