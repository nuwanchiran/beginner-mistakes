import { createContext, useContext } from 'react';

const TitleContext = createContext('');

type Props = {
  children: React.ReactNode;
};

const TitleContextProvider = ({ children }: Props) => {
  return (
    <TitleContext.Provider value="Hello world">
      {children}
    </TitleContext.Provider>
  );
};

export default TitleContextProvider;

export const useTitle = () => useContext(TitleContext);
