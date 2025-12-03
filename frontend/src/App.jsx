import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Home from './components/home'
import Login from './components/auth/Login'
import Signup from './components/auth/signup'
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/Signup',
    element:<Signup/>
  },
 
])
function App() {

  return (
    <>
    <div>
     <RouterProvider router = {appRouter}/>
     </div>
    </>
  )
}

export default App
