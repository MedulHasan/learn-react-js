export default function ClickCounter({ count, incrementCount }) {
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Click {count} times Context API
            </button>
        </div>
    );
}
