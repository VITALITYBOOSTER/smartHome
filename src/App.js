import React from 'react';
import MainToolBar from './ToolBar/MainToolBar'
import MainBoard from './MainBoard/MainBoard'
import SupportBoard from './SupportBoard/MainSupportBoard'
import SupportVideo from './SupportVideo/SupportVideo'
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <MainToolBar />
      <Route path='/' exact component={MainBoard}></Route>
      <Route path='/support' exact component={SupportBoard}></Route>
      <Route path='/video' exact component={SupportVideo}></Route>
    </div>
  );
}

export default App;
