import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Component/Home'
import About from '../Component/About'

const Router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'About',
        element: <About />,
      },
    ],
  },
])

export default Router
