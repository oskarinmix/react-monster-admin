import React from 'react'
import { apiJson } from '../data/api'
const DataContext = React.createContext()
const ComponenteData = ({ children }) => {
    return (
        <DataContext.Provider value={apiJson}>
            {children}
        </DataContext.Provider>
    );

}
export { ComponenteData, DataContext };