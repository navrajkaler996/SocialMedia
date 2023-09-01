import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Provider} from "react-redux"
import { store } from './store/store'
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
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
