import { useState } from 'react'
import './App.css'
import { Wrapper } from './styled/common/Common.styled'
import { Route, Routes, useNavigate } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import MainPage from './pages/MainPage/MainPage'
import TaskPage from './pages/TaskPage/TaskPage'
import ExitPage from './pages/ExitPage/ExitPage'
import SignInPage from './pages/SignInPage/SignInPage'

import NewCardPage from './pages/NewCardPage/NewCardPage'
import { appRoutes } from './lib/appRoutes'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import { GlobalStyle } from './styled/common/Global.styled'





export default function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  function login(newUser) {
    setUser(newUser)
    navigate(appRoutes.MAIN)
  }
  function logout() {
    setUser(null)
    navigate(appRoutes.SIGNIN)
  }
  return (

    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage user={user} />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>

      <Route path={appRoutes.SIGNIN} element={<SignInPage login={login} />} />
      <Route path={appRoutes.SIGNUP} element={<SignUpPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  )
}