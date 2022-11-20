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
        setTimeout(() => {
            check()
                .then(data => {
                    user.setUser(true)
                    user.setIsAuth(true)
                })
                .finally(() => setLoading(false))
        }, 1000)

    }, [])

    if (loading) {
        return <div>Loading...</div>
    } else {
        return (
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        );
    }
});

export default App;
