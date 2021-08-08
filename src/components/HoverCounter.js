/* eslint-disable jsx-a11y/mouse-events-have-key-events */

export default function HoverCounter({ count, incrementCount }) {
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hover {count} times Render Props</h1>
        </div>
    );
}
