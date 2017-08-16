import React from 'react';

export default class displayElapsedTime extends React.Component{
    render(){
        return(

            <div>

                    <p> The Time Elapsed in seconds is {this.props.timeElapsed} </p>

            </div>
            );
    }
}



