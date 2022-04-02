import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Coins from './customHooks/pages/Coins';
import Intro from './customHooks/pages/Intro';
import Categories from './customHooks/pages/Categories';
import Navbar from './Navbar'

const AuthenticatedApp = () => {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/coins' element={<Coins />} />
        </Routes>
        </BrowserRouter>
    )

}


export default AuthenticatedApp;
