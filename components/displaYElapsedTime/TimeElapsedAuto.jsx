import React from 'react';
import DisplayElapsedSec from './TimeElapsedinSec.jsx';

export default class TimeElapsed extends React.Component{
    constructor(props){
        super(props);
        this.state = { timeThen: new Date().getTime(),
            timeNow:null,
            timeElasped:null }
    }
    componentDidMount(){
        this.timerID = setInterval(()=> this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                <h1> Hello {this.props.name}!!!! </h1>
                <p> Start Time: {this.milliToTime(this.state.timeThen)} </p>
                <p> End Time: {this.milliToTime(this.state.timeNow)} </p>
                {(this.state.timeElasped > 0)
                ? (<DisplayElapsedSec timeElapsed={this.state.timeElasped}/>)
                    : <p></p>
                }
            </div>

        )
    }


    milliToTime(milli){
        let newTime = new Date(milli);
        let hours = newTime.getHours();
        let minutes = newTime.getMinutes();
        let seconds = newTime.getSeconds();
        if(hours < 10){
            hours = '0' + hours;
        }
        if(minutes < 10){
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0'+ seconds;
        }
        let UpdatedTime = hours + ':' +  minutes+':'+ seconds;
        return  UpdatedTime;
    }

    tick(){
        this.setState({timeNow: new Date().getTime()});
        let timeElapsedCalc = Math.round((this.state.timeNow  - this.state.timeThen) / 1000);
        this.setState({
            timeElasped: timeElapsedCalc
        })
    }
}