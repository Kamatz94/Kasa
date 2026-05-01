import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import PageError from './pages/pageError/PageError'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Listing from './pages/listing/Listing';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/listing/:id',
        element: <Listing />
      },
      {
        path:'*',
        element: <PageError />
      },
    ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App