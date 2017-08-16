import React, {Component} from 'react';

export default class NewNameArr extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let len = this.props.words.length;
        let str = ''
        if (len > 0)
            str = this.props.sentence;

        return (
            <div>
                <div>
                    <h1> {str} </h1>
                </div>
                <ol>
                    {this.props.words.map(everyName =>(
                        <li> {everyName} </li>
                    ))}
                </ol>
            </div>
        );
    }
}
