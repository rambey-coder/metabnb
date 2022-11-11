import { createContext, useState, useContext } from "react";

const AppContext = createContext(null)

export const useAppContext = () => {
    const context = useContext(AppContext)

    return context;
}

const ContextProvider = ({children}) => {
    const [wallet, setWallet] = useState(false)

    const handleClick = () => {
        console.log('clk');
        setWallet()
      }

    return (
        <AppContext.Provider value={{wallet, handleClick}}>
            {children}
        </AppContext.Provider>
    )
}


export default ContextProvider;