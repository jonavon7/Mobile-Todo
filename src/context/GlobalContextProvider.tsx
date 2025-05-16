import React, { PropsWithChildren } from 'react';
import TodosDataProvider from './TodosContext';

const GlobalContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <TodosDataProvider>
      {children}
    </TodosDataProvider>
  )
};

export default GlobalContextProvider;
