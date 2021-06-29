// your ImageSlider code here!
import React, { Component } from 'react';
// import Bomb from './Bomb.js';

export default class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
      }

    render(){
        return (
            <div ClassName="image-slider">
               <p>I am on slide {this.state.currentSlideIndex}</p>
            </div>
        )
    }

}