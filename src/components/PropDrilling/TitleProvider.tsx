import { createContext, useContext } from 'react';

const TitleContext = createContext('');

type Props = {
  children: React.ReactNode;
};

const TitleProvider = ({ children }: Props) => {
  return (
    <TitleContext.Provider value="context title">
      {children}
    </TitleContext.Provider>
  );
};

export default TitleProvider;

export const useTitle = () => useContext(TitleContext);