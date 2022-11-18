import {ADMIN_ROUTE, LOGIN_ROUTE, MAINPAGE_ROUTE, REGISTRATION_ROUTE, REPOLIST_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import RepoList from "./pages/RepoList";
import Auth from "./pages/Auth";
import MainPage from "./pages/MainPage";
import Repo from "./pages/Repo";

export const privateRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin />
    },


]

export const publicRoutes = [
    {
        path: REPOLIST_ROUTE,
        Component: <RepoList />
    },{
        path: REPOLIST_ROUTE + '/:id',
        Component: <Repo />
    },{
        path: MAINPAGE_ROUTE,
        Component: <MainPage />
    }
]

export const authRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth />
    }
]