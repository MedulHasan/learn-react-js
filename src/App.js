import ClockList from './components/ClockList';

function App() {
    const quantity = [1, 2, 3];
    return (
        <div>
            <ClockList quantity={quantity} />
        </div>
    );
}

export default App;
