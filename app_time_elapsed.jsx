import React from 'react';
import ReactDOM from 'react-dom';
import CurrentTime from './components/samples/getCurrentTime.jsx';


class Elem2 extends React.Component{
    constructor(props){
        super(props);
        this.state = { timeThen: new Date().getTime(),
            timeNow:null,
            timeNowRe : null,
            timeElasped:null }
        this.chkTimeElapsed = this.chkTimeElapsed.bind(this) ;
        this.newTime =  this.newTime.bind(this);

    }
    render() {
        return (
            <div>
                <h1> Hello {this.props.name}!!!! </h1>
                <p> Start Time: {this.milliToTime(this.state.timeThen)} </p>
                {(this.state.timeNow !== null)
                    ? (<p> End Time: {this.milliToTime(this.state.timeNow)} </p>)
                    :(<p></p>)
                }
                <button onClick={this.newTime} > Click here for new time </button>
                <button  onClick={this.chkTimeElapsed}> Click Here </button>
                <CurrentTime     timeElapsed={this.state.timeElasped}/>
            </div>

        )
    }


    milliToTime(milli){
        let newTime = new Date(milli);
        let hours = newTime.getHours();
        let minutes = newTime.getMinutes();
        let seconds = newTime.getSeconds();
        if (seconds < 10){
            seconds = '0'+ seconds;
        }
        let UpdatedTime = hours + ':' +  minutes+':'+ seconds;
        return  UpdatedTime;
    }
    newTime(evt){
        evt.preventDefault();
        this.setState({timeNow: new Date().getTime()});


    }
    chkTimeElapsed(evt) {
        evt.preventDefault();

        let timeElapsedCalc = Math.round((this.state.timeNow  - this.state.timeThen) / 1000);
        this.setState({
            timeElasped: timeElapsedCalc
        })
    }
}


ReactDOM.render(
    <Elem2 name="Bala" />,
    document.getElementById('app')
);