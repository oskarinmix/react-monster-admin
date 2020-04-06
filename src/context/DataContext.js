import React, { useMemo } from "react";
import { apiJson } from "../data/api";
import useUser from "../hooks/useUser";

const DataContext = React.createContext();
const ComponenteData = (props) => {
  const value = useUser();
  return <DataContext.Provider value={value} {...props} />;
};
export { ComponenteData, DataContext };
