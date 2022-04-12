import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Coins from './customHooks/pages/Coins';
import Intro from './customHooks/pages/Intro';
import Categories from './customHooks/pages/Categories';
import Navbar from './Navbar'
import Transactions from "./redux-based/pages/Transactions.page";
import Departments from "./redux-based/pages/Departments.page";
import BasicCounter from "./redux-based/pages/BasicCounter";
import Users from "./redux-based/pages/Users.page";

const AuthenticatedApp = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Intro/>}/>
                <Route path='/categories' element={<Categories/>}/>
                <Route path='/coins' element={<Coins/>}/>
                <Route path='/transactions' element={<Transactions/>}/>
                <Route path='/departments' element={<Departments/>}/>
                <Route path='/counter' element={<BasicCounter/>}/>
                <Route path='/users' element={<Users/>}/>
            </Routes>
        </BrowserRouter>
    )

}


export default AuthenticatedApp;
