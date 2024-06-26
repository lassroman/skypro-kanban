
import './App.css'

import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import MainPage from './pages/MainPage/MainPage'
import TaskPage from './pages/TaskPage/TaskPage'
import ExitPage from './pages/ExitPage/ExitPage'
import SignInPage from './pages/SignInPage/SignInPage'

import { appRoutes } from './lib/appRoutes'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import NewCardPage from './pages/NewCardPage/NewCardPage'


export default function App() {

  return (

    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
          <Route path={appRoutes.NEW_TASK} element={<NewCardPage />} />
        </Route>
      </Route>

      <Route path={appRoutes.SIGNIN} element={<SignInPage />} />
      <Route path={appRoutes.SIGNUP} element={<SignUpPage />} />

      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  )
}