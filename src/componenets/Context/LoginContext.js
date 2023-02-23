import { createContext } from "react";
import { useState } from "react";

let LoginContext = createContext();


export const LoginProvider = ({ children }) => {
    const [isLibrarianVisible, setLibrarianVisible] = useState(false);
    return <LoginContext.Provider value={{ isLibrarianVisible, setLibrarianVisible }}>
        {children}
    </LoginContext.Provider>
}
export default LoginContext;