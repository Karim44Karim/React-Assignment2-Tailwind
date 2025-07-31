
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home/Home"
import About from "./About/About"
import Portfolio from "./Portfolio/Portfolio"
import Contact from "./Contact/Contact"
import Layout from './Layout/Layout'
import NotFound from './NotFound/NotFound'
import ErrorPage from './ErrorPage/ErrorPage'

function App() {
  const router = createBrowserRouter([
    {
      path:'',
      element: <Layout />,
      errorElement: <ErrorPage/>,
      children: [
            {
              path: '',
              element: <Home/>
            },
            {
              path: 'home',
              element: <Home/>
            },
            {
              path: 'about',
              element: <About/>
            },
            {
              path: 'portfolio',
              element: <Portfolio/>
            },
            {
              path: 'contact',
              element: <Contact/>
            }
              ]
            },
            {
              path: '*',
              element: <NotFound/>
            }
          ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
