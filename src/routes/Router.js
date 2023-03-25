import { BrowserRouter, Routes, Route } from "react-router-dom"
import Client from "../pages/Client"
import User from '../pages/User'



export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Client/>}/>
                <Route exact path="/user" element={<User/>}/>s
            </Routes>
        </BrowserRouter>
    )
}

