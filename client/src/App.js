import React, {useContext, useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userApi";


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check()
            .then(data => {
                user.setUser(true)
                user.setIsAuth(true)
                // alert('You successfully authorized')
            })
            .finally(() => setLoading(false))
            .catch((e) => {
                alert(e.message)
                alert(user.isAuth)
            })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

        return (
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        );
});

export default App;
