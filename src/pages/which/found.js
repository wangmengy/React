import React, { Component } from 'react';

import {
    FoundWrap,
    FoundContainer,
    FoundItem,
} from './styledComponent'
import Animates from 'components/highorder/animates'
class Found extends Component {
    constructor(){
        super()
        this.state={
            simpleList:[]
        }
    }
    render() {
        return (
            <FoundWrap>
                <FoundContainer>
                    {
                        this.state.simpleList.map((val)=>{
                            return(
                                <FoundItem
                                key={val.id}
                                >
                                    <img src={val.pic} alt="" />
                                </FoundItem>
                            )
                        })
                    }
                    
                </FoundContainer>
            </FoundWrap>
        );
    }
    componentDidMount(){
        fetch('/api/navigation/listNew?param=%7B%22id%22%3A0%2C%22depth%22%3A1%2C%22type%22%3A2%7D',{
            method:'get',
            headers:{
                'appKey':'ef1fc57c13007e33',
                "appVersion": "3.9.0"
            }
        })
        .then(res=>{
            return res.json()
        })
        .then(result=>{
            // console.log(result)
            this.setState({
                simpleList:result.data||[]
            })
        })
    }
}

export default Animates(Found)