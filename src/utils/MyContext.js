import { createContext, useEffect, useState } from 'react';
import { parseJWT } from '../shared/constants';

const MyContext = createContext('');

function MyContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000);
    const expirationTime = parseJWT(localStorage.getItem('at'));
    if (currentTime > expirationTime) {
      console.log('The token has expired');
      setIsLogin(false);
    } else {
      console.log('The token is still valid');
      setIsLogin(true);
    }
  }, []);
  return (
    <MyContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, MyContextProvider };
