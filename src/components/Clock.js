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
        const { date, locale } = this.state;
        // let button;
        // if (locale === 'bn-BD') {
        //     button = <Button change={this.handleClick} locale="en-US" />;
        // } else {
        //     button = <Button change={this.handleClick} locale="bn-BD" />;
        // }
        return (
            <div>
                <h1 className="heading">
                    <span>Hello World -{date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" show={false} enable />
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" show enable={false} />
                )}
            </div>
        );
    }
}

export default Clock;
