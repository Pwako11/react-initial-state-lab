// your Bomb code here!
import React, { Component } from 'react';
// import ImageSlider from './ImageSlider.js';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
      }

   

    render(){
        const time = this.state.secondsLeft;
        let countDown;
        if (time === 0){
           countDown = <p>Boom!</p>
        } else {
            countDown = <p>{time} seconds left before I go boom!</p>
        };
        return (

            <div ClassName="bomb"> 
                {countDown}
            </div>
        )
    }

}
