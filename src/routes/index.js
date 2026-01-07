
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from '../pages/Signup';
import SignIn from '../pages/SignIn';  

function RoutesApp() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='' element={ <SignIn /> } />
            <Route path='' element={ <SignUp /> } />


        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;


