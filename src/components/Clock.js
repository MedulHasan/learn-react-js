/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-typos */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    // life cycle event or hook
    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    componentWillunmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        console.log('clock component render');
        const { date, locale } = this.state;
        // const { locale } = this.props;
        return (
            <div>
                <h1 className="heading">
                    <span>Hello World -{date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick} locale="en-US" />
            </div>
        );
    }
}

export default Clock;
