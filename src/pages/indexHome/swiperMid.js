import React, { Component } from 'react';
import { Carousel } from "antd-mobile"
import Time from '../../components/time/Time'
class swiperMid extends Component {
    constructor(){
        super()
        this.state = {
            imgHeight: 187,
        }
    }
    componentDidMount() {
        // simulate img loading
        // setTimeout(() => {
        //     this.setState({
        //         data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        //     });
        // }, 100);
    }
    render() {
        
            // console.log(this.props.items)
        return (
            <Carousel className="space-carousel"
                frameOverflow="visible"
                cellSpacing={15}
                slideWidth={0.7}
                autoplay={true}
                infinite
                afterChange={index => this.setState({ slideIndex: index })}
            >
                {this.props.items && this.props.items.items.map((val, index) => (
                    <a
                        key={val}
                        href="##"
                        style={{
                            display: 'block',
                            position: 'relative',
                            top: this.state.slideIndex === index ? -10 : 0,
                            height: this.state.imgHeight,
                            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <img
                            src={val.pic}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        <Time time={val.endTime}></Time>
                    </a>
                ))}
            </Carousel>
                
        );
        
    }
}

export default swiperMid;