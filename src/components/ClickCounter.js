import withCounter from './HOC/withCounter';

const ClickCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Click {count} times HOC
            </button>
        </div>
    );
};

export default withCounter(ClickCounter);
