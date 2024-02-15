import React, { useEffect } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { useSelector } from 'react-redux';
import Login from './components/login/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallBack } from "./utils/ErrorFallBack";

function App() {

  const user = useAppSelector((state) => state.user.user)

  const dispacth = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispacth(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispacth(logout())
      }
    })
  }, [dispacth]);

  return (
    <div className="App">
      {user ? (
          <>
            <ErrorBoundary FallbackComponent={ErrorFallBack}>
              <Sidebar />
            </ErrorBoundary>

            <Chat/>
          </>
      ) : (
          <><Login/></>
        )}
    </div>
  );
}

export default App;