
import React from 'react'
import {
    CSSTransition
} from "react-transition-group"
function wrapAnimation(WrapedComponent){
    return class extends React.Component{
        render(){
            let dir = this.props.location.state?this.props.location.state.dir:"left"
            return(
                <CSSTransition
                    in={!!this.props.match}
                    classNames = {{
                        enter:'animated',
                        enterActive:dir==="right"?'fadeInRight':'fadeInLeft',
                        exit:'animated',
                        exitActive: dir === "left" ? 'fadeOutRight' : 'fadeOutLeft',
                    }}
                    timeout = { 300}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                <WrapedComponent {...this.props}/>
                </CSSTransition>
            )
        }
    }
}

export default wrapAnimation