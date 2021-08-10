import { useState } from 'react';
import MyComponent from './components/MyComponents';

export default function App() {
    const [show, setShow] = useState(true);
    // render() {
    return (
        <div>
            <div> {show && <MyComponent />}</div>
            <p>
                <button type="button" onClick={() => setShow((prev) => !prev)}>
                    {show ? 'Hide Post' : 'Show Post'}
                </button>
            </p>
        </div>
    );
    // }
}
