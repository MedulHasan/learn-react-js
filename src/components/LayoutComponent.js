import useWindoWidth from '../hooks/useWindoWidth';

export default function LayoutComponent() {
    const onSmallScreen = useWindoWidth(768);

    return (
        <div>
            <h1>you are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
        </div>
    );
}
