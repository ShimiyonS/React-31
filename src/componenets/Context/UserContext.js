import { createContext } from "react";
import { useState } from "react";

let UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("");
    return <UserContext.Provider value={{ username, setUsername }}>
        {children}
    </UserContext.Provider>
}
export default UserContext;
