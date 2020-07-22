import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import moment from 'moment';

import Clock from './Clock'

class Birthday extends Component {

    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleGenerate = this.handleGenerate.bind(this)

        this.state = {
            startDate: moment(),
            fromCompleted: false
        }

    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    handleGenerate() {
        this.setState({
            fromCompleted: true
        })
    }


    render() {
        return (
          <div>
              {
                  this.state.formCompleted ?
                    <div>
                        <Clock birthdayFormState={this.state}/>
                    </div>
                :
                    <div>
                        <h1>Counter Down!</h1>
                        <DatePicker 
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        />
                        <a onClick={this.handleGenerate}>Generate Countdown</a>
                    </div>
              }
            
          </div>
        );
    }
}

export default Birthday;