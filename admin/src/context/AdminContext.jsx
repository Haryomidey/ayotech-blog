import { createContext, useState } from "react";

export const AdminContext = createContext();

const ContextWrapper = ({ children }) => {
    
    const [adminInfo, setAdminInfo] = useState();

    return (
        <AdminContext.Provider value={{adminInfo, setAdminInfo}}>
            {children}
        </AdminContext.Provider>
    )
}

export default ContextWrapper;