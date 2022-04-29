import React, {useState} from 'react';
import { selectUser } from "./features/userSlice";
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Login from './components/Login/Login';
import { useSelector } from "react-redux";


function App() {

  const user = useSelector(selectUser)

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
