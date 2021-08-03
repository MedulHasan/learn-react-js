import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        // console.log(nextProps);
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        }
        return true;
    }

    render() {
        console.log('Button component ender');
        const { change, locale } = this.props;
        return (
            <button type="button" onClick={() => change(locale)}>
                Clock Me
            </button>
        );
    }
}

export default Button;
