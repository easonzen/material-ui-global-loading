import { useContext } from 'react';
import GlobalLoadingContext from './global-loading-context';

const useGlobalLoading = () => {
    const contextValue = useContext(GlobalLoadingContext);
    return contextValue;
};

export default useGlobalLoading;
