import { useState, useCallback, Fragment, useMemo } from 'react';
import GlobalLoadingContext from './global-loading-context';
import GlobalLoading from './global-loading';

const GlobalLoadingProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const openLoading = useCallback(() => {
        setOpen(true);
    }, []);

    const closeLoading = useCallback(() => {
        setOpen(false);
    }, []);

    const contextValue = useMemo(
        () => ({
            openLoading,
            closeLoading,
        }),
        [openLoading, closeLoading]
    );

    return (
        <Fragment>
            <GlobalLoadingContext.Provider value={contextValue}>
                {children}
            </GlobalLoadingContext.Provider>
            <GlobalLoading open={open} />
        </Fragment>
    );
};

export default GlobalLoadingProvider;
