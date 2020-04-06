import React, { useContext } from "react";
import {DataContext} from '../context/DataContext'
const MainContent = (props) => {
    const {switchUser} = useContext(DataContext)
  return (
    <div className="row">
      <div className="col-12">
        {props.children}
        <button className="btn btn-primary" onClick={switchUser}>
          Cambiar Usuario
        </button>
      </div>
    </div>
  );
};

export default MainContent;
