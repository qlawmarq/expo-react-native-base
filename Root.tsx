// core
import React from 'react';
import { StatusBar } from 'expo-status-bar';

// components & theme
import { ITheme, Spinner } from 'native-base';

// hooks
import useCachedResources from './hooks/useCachedResources';
import useAxiosConfig from './hooks/useAxiosConfig';

// navigation
import Navigation from './navigation';

export const Root: React.FC<{ theme: ITheme }> = ({ theme }) => {
  const isLoadingComplete = useCachedResources();
  const isAxiosSetupComplete = useAxiosConfig();
  return (
    <>
      {!isLoadingComplete && !isAxiosSetupComplete && <Spinner size="lg" />}
      {isLoadingComplete && isAxiosSetupComplete && (
        <>
          <Navigation theme={theme} />
          <StatusBar />
        </>
      )}
    </>
  );
};
