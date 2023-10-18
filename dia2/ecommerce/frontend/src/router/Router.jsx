import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import Auth from '../pages/Auth'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/admin',
        element:<Admin/>
    },
    {
        path:'/login',
        element:<Auth/>
    }
])

export default router