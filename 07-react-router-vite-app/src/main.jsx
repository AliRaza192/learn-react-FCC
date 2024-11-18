import { RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route,  } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import GitHub, {githubInfo} from './components/Github/GitHub.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about/' element={<About/>}/>
      <Route path='contact/' element={<Contact/>}/>/
      <Route
      loader={githubInfo} 
      path='github/'
      element={<GitHub/>}/>
      <Route path='user/' element={<User/>}>
        <Route path=':userId' element={<User/>}/>
      </Route>

    
    </Route>
  )


)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
