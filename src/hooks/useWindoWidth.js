import { useCallback, useEffect, useState } from 'react';

const useWindoWidth = (screenSize) => {
    const [onSmallScreen, setOnSmalllScreen] = useState(false);

    const checkScreenSize = useCallback(() => {
        setOnSmalllScreen(window.innerWidth < screenSize);
    }, [screenSize]);

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [checkScreenSize]);

    return onSmallScreen;
};

export default useWindoWidth;
