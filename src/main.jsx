import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { UserProvider } from './contexts/user.jsx';
import { TasksProvider } from './contexts/tasks.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <TasksProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </TasksProvider>
    </React.StrictMode>
  </BrowserRouter>
)
