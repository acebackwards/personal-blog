import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {authRoutes, privateRoutes, publicRoutes} from "../routes";
import {MAINPAGE_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth && privateRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            {!user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            <Route path='*' element={<Navigate to={MAINPAGE_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;