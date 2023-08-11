import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


//Pages import
import Home from './pages/Home'
import Header from './components/Header'

//Router configuration
const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route  path="/" element={<Home />} />
    </Route>
  )
)
function App() {


  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
