import { createContext, useState, useContext } from "react";

const AppContext = createContext(null)

export const useAppContext = () => {
    const context = useContext(AppContext)

    return context;
}

const ContextProvider = ({children}) => {
    const [wallet, setWallet] = useState(false)
    const [click, setClick] = useState(false)

    const handleClose = () => {
        setWallet(false)
    }

    const handleClicks = () => {
        setClick(!click)
    }

    const handleClick = () => {
        setWallet(true)
      }

    return (
        <AppContext.Provider value={{wallet, handleClick, handleClose, handleClicks, click}}>
            {children}
        </AppContext.Provider>
    )
}


export default ContextProvider;