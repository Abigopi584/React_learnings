import React from 'react';

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newTime: this.props.timeElapsed,
            displayTime:''
        }
    }
    // componentDidMount(){
    //
    //     if(this.state.newTime <= 60){
    //         this.setState({displayTime: this.state.newTime})
    //     }
    //     else{
    //         let minutes = Math.floor(this.state.newTime / 60);
    //         let remSec = this.state.newTime - (minutes * 60);
    //         if (remSec < 10) {
    //             remSec = '0' + remSec
    //         }
    //         this.setState({displayTime : displayTime=  minutes + ' m ' + ':' + remSec + ' s'})
    //     }
    // }

    render() {
        return (

            <div>

                {(this.props.timeElapsed <= 60)
                    ? (<p> The Time Elapsed is {this.state.newTime} seconds </p>)
                    : (<p> The Time Elapsed is {this.timeElaspedFunc(this.state.newTime)} </p>)
                }

            </div>
        )
    }
        timeElaspedFunc(newTime){
            let displayTime = '';
             var minutes = Math.floor(newTime / 60);
             var remSec = newTime - (minutes * 60);
             if (remSec < 10) {
                    remSec = '0' + remSec
             }

            displayTime=  minutes + ' m ' + ':' + remSec + ' s';

            return displayTime;
        }
}



