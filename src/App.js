/* eslint-disable react/no-unused-state */
import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import ThemeContext from './contexts/themeContext';

export default class App extends React.Component {
    state = {
        theme: 'light',
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return {
                        theme: 'light',
                    };
                }
                return {
                    theme: 'dark',
                };
            });
        },
    };

    /* switchTheme = () => {
        this.setState(({ theme }) => {
            if (theme === 'dark') {
                return {
                    theme: 'light',
                };
            }
            return {
                theme: 'dark',
            };
        });
    }; */

    render() {
        // const { theme } = this.state;
        return (
            <div className="App">
                <Counter>
                    {(count, incrementCount) => (
                        <ClickCounter count={count} incrementCount={incrementCount} />
                    )}
                </Counter>
                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
