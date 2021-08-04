import Clock from './Clock';

function ClockList({ quantity = [] }) {
    return (
        <div>
            {quantity.map(() => (
                <Clock key={Math.random()} />
            ))}
        </div>
    );
}

export default ClockList;
