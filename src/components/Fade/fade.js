
import React from 'react'
import {
    CSSTransition
} from "react-transition-group"
function wrapAnimation(WrapedComponent) {
    return class extends React.Component {
        render() {
            let isCss = this.props.isloading
            console.log(isCss)
            return (
                <CSSTransition
                    in={!!isCss}
                    classNames={{
                        enter: 'animated',
                        enterActive: isCss? 'fadeIn' : 'fadeOut',
                        exit: 'animated',
                        exitActive: isCss?'fadeOut' : 'fadeIn',
                    }}
                    timeout={300}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <WrapedComponent {...this.props} />
                </CSSTransition>
            )
        }
    }
}

export default wrapAnimation