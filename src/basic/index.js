/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';

// ----------------create react element--------------------
// const element = React.createElement('h1', null, 'Hello World'); // simple js object

// -----------creat react element manually like html----------
// const element = <h1>Hello World</h1>;

// setInterval(() => {
//     const index = 0;
//     const element = (
//         <h1 className="heading" tabIndex={index}>
//             Hello World {new Date().toLocaleTimeString()}
//         </h1>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }, 1000);

// --------------react (function) component--------------
// function Clock({ locale }) {
//     return (
//         <h1 className="heading">
//             <span>Hello World {new Date().toLocaleTimeString(locale)}</span>
//         </h1>
//     );
// }
// ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));

// ----------------react (class) component-------------
class Clock extends React.Component {
    render() {
        return (
            <h1 className="heading">
                <span>
                    Hello World - {new Date().toLocaleTimeString(this.props.enlocale)} -
                    {new Date().toLocaleTimeString(this.props.bnlocale)}
                </span>
            </h1>
        );
    }
}

// const Clockcomponent = new Clock();

ReactDOM.render(
    <Clock bnlocale="bn-BD">
        <Clock enlocale="en-US" />
    </Clock>,
    document.getElementById('root')
);
