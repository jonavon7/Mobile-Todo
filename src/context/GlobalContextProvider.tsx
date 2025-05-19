import React, { PropsWithChildren } from 'react';
import { TodosDataProvider } from './useTodosData';
import { LoginDataProvider } from './useLoginData';

const GlobalContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <LoginDataProvider>
      <TodosDataProvider>
        {children}
      </TodosDataProvider>
    </LoginDataProvider>
  )
};

export default GlobalContextProvider;
