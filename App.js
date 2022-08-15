import logo from './logo.svg';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp';
import ResetPassScreen from './Components/ResetPassScreen';
import ChangePass from './Components/ChangePass';
import Home from './Components/Home';
import Feed from './Components/Feed';
import Events from './Components/Events';
import Team from './Components/Team';
import Offers from './Components/Offers'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/ResetPassScreen' element={<ResetPassScreen />} />
        <Route path='/ChangePass' element={<ChangePass />} />
        <Route path='/Home' element={<Home/>}>
        <Route path='/Home/Feed' element={<Feed/>}/>
        <Route path='/Home/Events' element={<Events/>}/>
        <Route path='/Home/Offers' element={<Offers/>}/>
        <Route path='/Home/Team' element={<Team/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
