import { createContext, useState, useContext } from "react";

const AppContext = createContext(null)

export const useAppContext = () => {
    const context = useContext(AppContext)

    return context;
}

const ContextProvider = ({children}) => {
    const [wallet, setWallet] = useState(false)

    const handleClose = () => {
        setWallet(false)
    }

    const handleClick = () => {
        setWallet(true)
      }

    return (
        <AppContext.Provider value={{wallet, handleClick, handleClose}}>
            {children}
        </AppContext.Provider>
    )
}


export default ContextProvider;