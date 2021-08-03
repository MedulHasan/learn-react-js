/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-typos */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

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
        // const { locale } = this.props;
        return (
            <div>
                <h1 className="heading">
                    <span>Hello World -{date.toLocaleTimeString(locale)}</span>
                </h1>
                <button type="button" onClick={() => this.handleClick('en-US')}>
                    Click here
                </button>
            </div>
        );
    }
}

export default Clock;
