import React from "react";
import {store} from './app/store';
import {Provider} from "react-redux";
function App(){

  return(
  <Provider store={store}>
    <div className="mybox">
      <h1>Welcome To Edupoly ReactJS Training</h1>

    </div>
    </Provider>
    );
    }


  
  export default App;
