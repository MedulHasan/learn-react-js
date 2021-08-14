import useWindoWidth from '../hooks/useWindoWidth';

export default function LayoutComponentTwo() {
    const onSmallScreen = useWindoWidth(960);

    return (
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h1>Another Component</h1>
        </div>
    );
}
