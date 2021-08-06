import ClickCounter from './components/ClickCounter';
// import User from './components/User';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';

function App() {
    return (
        <div className="App">
            {/* <User render={(isLoggedIn) => (isLoggedIn ? 'Medul Hasan' : 'Guest')} /> */}
            <Counter
                render={(count, incrementCount) => (
                    <ClickCounter count={count} incrementCount={incrementCount} />
                )}
            />
            <Counter
                render={(count, incrementCount) => (
                    <HoverCounter count={count} incrementCount={incrementCount} />
                )}
            />
        </div>
    );
}

export default App;
