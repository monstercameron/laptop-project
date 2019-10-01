import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
class carousel extends Component {
    state = {
        images: [
            `https://via.placeholder.com/480x320`,
            `https://via.placeholder.com/480x320`,
        ]
    }
    slides = () => {
        return this.props.images ?
            this.props.images.map((image, index) => {
                return <div key={index}>
                    <img src={image} alt={index} />
                    {/* <p className="legend">Legend {index}</p> */}
                </div>
            }) :
            this.state.images.map((image, index) => {
                return <div key={index}>
                    <img src={image} alt={index} />
                    {/* <p className="legend">Legend {index}</p> */}
                </div>
            })
    }
    render() {
        return (
            <Carousel
                {...this.props}
                autoPlay 
                showIndicators={false}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
            >
                {this.slides()}
            </Carousel>
        );
    }
}
export default carousel