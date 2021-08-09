/* eslint-disable jsx-a11y/mouse-events-have-key-events */

export default function HoverCounter({ count, incrementCount, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Hover {count} times Context API
            </h1>
            <button type="button" onClick={switchTheme}>
                Switch Theme
            </button>
        </div>
    );
}
