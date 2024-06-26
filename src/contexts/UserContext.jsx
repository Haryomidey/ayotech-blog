import { createContext, useState } from "react";

export const UserContext = createContext();

const ContextWrapper = ({ children }) => {
    
    const [userInfo, setUserInfo] = useState();

    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextWrapper;