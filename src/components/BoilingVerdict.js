export default function BoilingVerdict({ celsius = 0 }) {
    if (celsius >= 100) {
        return <p>Water would boil.</p>;
    }
    return <p>water would not boil.</p>;
}
