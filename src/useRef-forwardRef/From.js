import { useEffect, useRef } from 'react';
import Input from './Input';

export default function From() {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <p>
                <Input ref={inputRef} type="text" placeholder="enter something" />
            </p>
        </div>
    );
}
